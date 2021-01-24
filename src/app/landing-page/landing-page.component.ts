import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { HttpClient, HttpHeaders}  from '@angular/common/http'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.onload();
    // var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(myChart, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
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
  onload(){

    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer '+localStorage.getItem("Authorization")
    });

    // console.log('Bearer '+localStorage.getItem("Authorization"))
    
    this.http
      .get('https://wbm-system.herokuapp.com/api/customer', {
        headers: httpHeaders
      })
      .subscribe(result => {
        // console.log(result['data'].length);
        this.numberCustomer =  result['data'].length;
      });

    this.http
      .get('https://wbm-system.herokuapp.com/api/transaction', {
        headers: httpHeaders
      })
      .subscribe(result => {
        // console.log(result['data']);
        this.transactionRecordsNumber =  result['data'].length;
      });

    this.http
      .get('https://wbm-system.herokuapp.com/api/staff', {
        headers: httpHeaders
      })
      .subscribe(result => {
        // console.log(result['data']);
        this.employeeNumber =  result['data'].length;
      });
  }


  
  }


