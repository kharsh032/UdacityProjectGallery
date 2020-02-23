import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
Url:string = "http://localhost:62964/api/"
  constructor(private http:HttpClient) { }

  public Getbreed()
  {
    const httpOptions={
      headers:new HttpHeaders({
      'Content-Type': 'application/json'
      }),
    };
   return  this.http.get(this.Url+ 'Main/GetBreed',httpOptions)
  }
  public GetAgeGroup()
  {
    const httpOptions={
      headers:new HttpHeaders({
      'Content-Type': 'application/json'
      }),
    };
    return this.http.get(this.Url+ 'Main/GetAgeGroup',httpOptions);
  }

  public GetLocation()
  {
    const httpOptions={
      headers:new HttpHeaders({
      'Content-Type': 'application/json'
      }),
    };
    return this.http.get(this.Url+ 'Main/GetLocation',httpOptions);
  }

  public GetAll()
  {
    const httpOptions={
      headers:new HttpHeaders({
      'Content-Type': 'application/json'
      }),
    };
    return this.http.get(this.Url+ 'Main/GetAll',httpOptions);
  }
  public GetDetail(cities:any,Ages:any,breeds:any ){
  const httpOptions={
    headers:new HttpHeaders({
    'Content-Type': 'application/json'
    }),
  };
  return this.http.get(this.Url + 'Main/GetDetails?cities='+cities + '&Ages=' +Ages+ '&breeds='+breeds,httpOptions);
}
}