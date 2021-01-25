import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  username;
  password;
  
  ngOnInit(): void {
  }

  
  onSubmit(data : any){
    console.log(data);
    this.http.post('https://wbm-system.herokuapp.com/api/login',data)
    .subscribe((result)=>{
      console.log(result['token']);
      localStorage.setItem( "Authorization" , result['token']);

      if (localStorage.getItem("Authorization") != null) {
        this.router.navigate(['/dashboard']);
      }
    })

  }

  

}
