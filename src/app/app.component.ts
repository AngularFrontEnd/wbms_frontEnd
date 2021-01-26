import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { AuthServiceService } from '../app/auth-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'wmbs-project';

  constructor(
    private http: HttpClient,
    private router: Router,
    public authServiceService: AuthServiceService
  ) { }


  logOut() {
    localStorage.removeItem("Authorization");
    this.authServiceService.logOut()
    
    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem("Authorization")

    });
    console.log('Bearer ' + localStorage.getItem("Authorization"))
    this.http
      .post('https://wbm-system.herokuapp.com/api/logout', "", {
        headers: httpHeaders
      })
      .subscribe(result => {
        localStorage.removeItem("Authorization");
      });
    this.router.navigate(['/'])
  }

}