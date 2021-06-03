import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoggedInService } from '../logged-in.service';

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.css']
})
export class ProfileviewComponent implements OnInit {
  
  Tname='';
  Tnum='';
  Tmail='';

  constructor(private http:HttpClient ,private route:Router /*, private loggedUser:LoggedInService*/ ) {
    if(localStorage.getItem("id")!=null){
      this.http.post(environment.Server_url+'data/read_profile/', {"email":localStorage.getItem("id")}).subscribe((res:any) =>{
      //console.log(res);

      let k=res["profile"];
      this.Tname=k["username"];
      this.Tnum=k["mobNum"];
      this.Tmail=k["email"]
    }
      );
    }
  }

  ngOnInit(): void {}


}
