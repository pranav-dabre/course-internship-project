import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoggedInService } from '../logged-in.service';
import { RemfromcartService } from '../remfromcart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cartContent =[];

  Tcost= 0;

  constructor(private http:HttpClient ,private route:Router ,private rem:RemfromcartService ) {
    if(localStorage.getItem("id")!=null){
      http.post(environment.Server_url+'data/cart_read/',{"email":localStorage.getItem("id")}).subscribe((res: any) => {
      // console.log(res);

      for(let k of res["usercart"]){

        this.cartContent.push({
          Pcost: k["price"],
          Pname: k["title"],
          Pimage: k["image"],
          PId: k["id"]

        });
      }

      for(let i of this.cartContent){
        this.Tcost = this.Tcost + Number(i.Pcost);
      }

      });
    }

    
  }

  ngOnInit(): void {}

  deleteAll(){
    this.rem.deleteAll();
    window.location.reload();
  }


}
