import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IdeeService} from '../_services/idee.service';

@Component({
  selector: 'app-liste-des-idees',
  templateUrl: './liste-des-idees.component.html',
  styleUrls: ['./liste-des-idees.component.css']
})
export class ListeDesIdeesComponent implements OnInit {
  listIdee:any;
  idIdee:number;
  constructor(private httpClient:HttpClient, public ideeService:IdeeService) { }

  ngOnInit() {
    this.ideeService.getIdees().subscribe(
      data=>{
        this.listIdee=data;
        console.log("listIdee = ",this.listIdee);

      }, err=>{
        console.log("erreur dans ideeService.getIdees()",err)

    }
    )
  }
  selectIdIdee(idIdee:number){
    console.log("id de l'idee selctionne est "+idIdee);
  this.idIdee=idIdee;
  }
}
