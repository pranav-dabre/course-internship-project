import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoggedInService } from '../logged-in.service';



@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css'],
  
})
export class MenComponent implements OnInit {



  ngOnInit(): void {
  }

  cardsContent=[];


  // logged:string =this.loggedUser.logged;
  

  constructor(private http: HttpClient /*,private loggedUser:LoggedInService*/ ){
      http.post(environment.Server_url+'catalog/men/',{"opt":"zzz"}).subscribe((res: any) => {
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


    
    

  
  };
  

}
