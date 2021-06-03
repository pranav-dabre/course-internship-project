import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pdt',
  templateUrl: './pdt.component.html',
  styleUrls: ['./pdt.component.css']
})
export class PdtComponent implements OnInit {
  
  pdtId=localStorage.getItem("pdtId");
  url='';

  Title='';
  Price='';
  Img='';
  Size='';
  Colour='';
  disp='Added to cart';
  ifdisp=false;

  constructor(private http:HttpClient) {
    if (this.pdtId.charAt(0)=='m'){this.url=environment.Server_url+"catalog/men/"}
    if (this.pdtId.charAt(0)=='w'){this.url=environment.Server_url+"catalog/women/"}
    http.post(this.url,{"opt":this.pdtId}).subscribe((res: any) => {
      // console.log(res);
      this.Title=res["title"];
      this.Price=res["price"];
      this.Img=res["image"];
      this.Size=res["size"];
      this.Colour=res["colour"];

    });
    
    
  }
    

  ngOnInit(): void {
  }

  addToCart(){
    if(localStorage.getItem("id")==null){
      this.disp='Please Login First';
      
    }else{
      this.http.post(environment.Server_url+"data/cart_add/",{"email":localStorage.getItem("id"),"pdtId":this.pdtId}).subscribe((res:any)=>{
        // console.log(res);
    
        });
    }
    
    this.ifdisp=true;
  }
}
