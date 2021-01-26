import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private http: HttpClient,
    public authServiceService: AuthServiceService
  ) { }


  ngOnInit(): void {
    this.authServiceService.authenticate('dashboard')

    this.onload();
    var ctx = document.getElementById('myChart')
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septermber', 'October', 'November', 'December'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3, 20, 10, 15, 8, 11, 6],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }

  numberCustomer;
  transactionRecordsNumber;
  employeeNumber;

  onload() {

    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem("Authorization")
    });

    // console.log('Bearer '+localStorage.getItem("Authorization"))
    let numCus;
    this.http
      .get('https://wbm-system.herokuapp.com/api/customer', {
        headers: httpHeaders
      })
      .subscribe(result => {
        console.log(result);
        numCus = result;
        this.numberCustomer = numCus.length
        console.log(this.numberCustomer)
      });
    let numTrans;
    this.http
      .get('https://wbm-system.herokuapp.com/api/transaction', {
        headers: httpHeaders
      })
      .subscribe(result => {
        console.log(result);
        numTrans = result;
        this.transactionRecordsNumber = numTrans.length
        console.log(this.numberCustomer)
      });
    let numUser;
    this.http
      .get('https://wbm-system.herokuapp.com/api/staff', {
        headers: httpHeaders
      })
      .subscribe(result => {
        console.log(result);
        numUser = result;
        this.employeeNumber = numUser.length
        console.log(this.employeeNumber);
      });
  }

}