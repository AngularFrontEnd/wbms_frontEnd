import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}  from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class WbmsService {
  constructor(
    private http: HttpClient
    ) { }


  getData(url: string){
    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer '+localStorage.getItem("Authorization")
    });
    console.log(httpHeaders)
    console.log(url)
    console.log('Bearer '+localStorage.getItem("Authorization"))

    return this.http.get(url,{headers: httpHeaders});
  }
  
}
