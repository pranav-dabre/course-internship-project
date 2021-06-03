import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemfromcartService {

  constructor(private http:HttpClient) { }

  delete(PId){
    this.http.post(environment.Server_url+"data/cart_rem/",{"email":localStorage.getItem("id"),"pdtId":PId}).subscribe((res:any)=>{
      console.log(res["comment"]);
    });
  }

  deleteAll(){
    this.http.post(environment.Server_url+"data/cart_rem/",{"email":localStorage.getItem("id"),"pdtId":"zzz"}).subscribe((res:any)=>{
      console.log(res["comment"]);
    });
  }

}
