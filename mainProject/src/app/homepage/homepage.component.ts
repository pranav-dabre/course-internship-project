import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoggedInService } from '../logged-in.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  
})
export class HomepageComponent implements OnInit {



  ngOnInit(): void {
  }

  cardsContent=[];

  screenheight:number;
  screenwidth:number;
  screenavailwidth:number;
  screenavailheight:number;
  hidit:boolean;

  // logged:string =this.loggedUser.logged;
  

  constructor(private http: HttpClient /*,private loggedUser:LoggedInService*/ ){

    http.post(environment.Server_url+'catalog/best/',{"opt":"zzz"}).subscribe((res: any) => {
        // console.log(res);
  
        for (let catalogI of res["catalogue"]){
          // console.log(catalogI.description)
          // console.log(catalogI.title, catalogI.icon, 'catalog');
  
          // .push is like appending the cardsContent array
          this.cardsContent.push({
  
            cardTitle: catalogI.title,
            cardImage: catalogI.image,
            cardValue: catalogI.price,
            cardId:catalogI.id,
  
          });
        }
    });
    
      this.screenheight=document.body.clientHeight;/*window.screen.height;*/
      this.screenwidth=document.body.clientWidth;//window.screen.width;
      this.screenavailwidth=window.screen.availWidth;
      this.screenavailheight=window.screen.availHeight;
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.hidit=true;
        } 
      });

    
    

  
  };
  

}
