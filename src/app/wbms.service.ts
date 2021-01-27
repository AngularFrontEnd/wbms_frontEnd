import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class WbmsService {
  constructor(
    private http: HttpClient
  ) { }


  getData(url: string) {
    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem("Authorization")
    });

    return this.http.get(url, { headers: httpHeaders });
  }

  getDatatoView(url: string, id){
    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem("Authorization")
    });
    return this.http.get(url + `${id}`, { headers: httpHeaders });
  }

  addEmployee(url: string , body) {
    console.log(body)
    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem("Authorization")
    });

    return this.http.post(url, body,{ headers: httpHeaders , responseType: "text" });
  }

  addHousehold(url: string, body){
    console.log(body)
    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem("Authorization")
    });

    return this.http.post(url, body,{ headers: httpHeaders , responseType: "text" });
  }

  addMeterReading(url: string, body){
    console.log(body)
    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem("Authorization")
    });

    return this.http.post(url, body,{ headers: httpHeaders , responseType: "text" });
  }


}
