import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';


let apiurl="http://tap2vans.co.uk/api/";
/*
  Generated class for the UserloginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserloginProvider {

  constructor(public http: Http) {
    console.log('Hello UserloginProvider Provider');
  }

  postData(credentials,type){
    return new Promise((resolve,reject)=>{
      let header = new Headers({'Content-Type': 'application/json'});
      this.http.post(apiurl+type,JSON.stringify(credentials),{headers:header}).subscribe(res=>{
        resolve(res.json());
      }), (err)=>{
        reject(err);
      }
    })
  }
  getData(credentials,type){
    return new Promise((resolve,reject)=>{
      this.http.get(apiurl+type,JSON.stringify(credentials)).subscribe(res=>{
        resolve(res.json());
      }), (err)=>{
        reject(err);
      }
    })
  }
}
