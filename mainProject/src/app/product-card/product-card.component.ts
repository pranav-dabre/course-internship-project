import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RemfromcartService } from '../remfromcart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() Pimage: string ;
  @Input() Pname: string ;
  @Input() Pcost: string ;
  @Input() PId:string;
  
  constructor(private http:HttpClient, private rem:RemfromcartService) { }

  ngOnInit(): void {
  }

  delete(){
    this.rem.delete(this.PId);
    window.location.reload();
  }

}
