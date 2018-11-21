import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RequestCreatorService {

  private requestUrl: string;
  private httpHeader: object;
  private params: object;

  constructor(private http: HttpClient) { }

  PostData(BeaconUID: string, BeaconRSS: string){
    this.requestUrl = 'http://149.157.121.68:8080/';


    this.httpHeader = {
      headers: new HttpHeaders().set('Accept', 'application/json')
                                .set('Content-Type', 'application/json')
    };

    this.params ={
      UID: BeaconUID,
      RSS: BeaconRSS
    };

    var t=this.http.post(this.requestUrl, this.params, this.httpHeader);
    console.log(t);
  }

  GetData(BeaconUID: string){
    this.requestUrl = 'http://149.157.121.68:8080/';
    //?UID='+BeaconUID

    this.httpHeader = {
      headers: new HttpHeaders().set('Accept', 'application/json')
                                .set('Content-Type', 'application/json')
    };

    this.params ={};

    var t=this.http.get(this.requestUrl, this.httpHeader);
    console.log(t);
  }
}
