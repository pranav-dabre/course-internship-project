import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoggedInService } from '../logged-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
  }

  Server_url=environment.Server_url;

  linksForHeader=[{link:'/men',title:'Men'},{link:'/women',title:'Women'}  ];

  constructor(private loggedUser:LoggedInService) { }


  logout(){  // yet to write
    console.log("logout clicked");
    this.loggedUser.loguserout();
    
  }
}
