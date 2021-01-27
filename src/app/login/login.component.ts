import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import { AuthServiceService } from '../auth-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
y
  constructor(
    private http:HttpClient, 
    private router:Router,
    private authService: AuthServiceService,
    ) { }

  username;
  password;
  
  ngOnInit(): void {
    
  }

  
  onSubmit(data : any){
    this.http.post('https://wbm-system.herokuapp.com/api/login',data)
    .subscribe((result)=>{
      // console.log(result['user']['id']);

      localStorage.setItem( "Authorization" , result['token']);
      localStorage.setItem( "UserId", result['user']['id']);
      localStorage.setItem( "UserFullName" , result['user']['firstName']+" "+result['user']['lastName']);

      if (localStorage.getItem("Authorization") != null) {
        this.authService.authenticate('dashboard')
      }
    })

  }

  

}
