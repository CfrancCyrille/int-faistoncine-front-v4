import { Component, OnInit } from '@angular/core';
import {Idea} from '../_model/model.idea';
import * as Collections from 'typescript-collections';
import {Genre} from '../_model/model.genre';
import {HttpClient} from '@angular/common/http';
import { IdeeService} from '../_services/idee.service';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MotsClee} from '../_model/model.motsClee';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
 idea: Idea = new Idea();
  idea2: Idea = new Idea();
 genreS:any;
 s:String;
 listegenres:any;
 listTypeIdees:any;
  listMotscle:any;


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  motscles:MotsClee[]= [];
  t:boolean;
  add(event: MatChipInputEvent): void {
    this.t = true;
    const input = event.input;
    const value = event.value;

    // Add our motcle
    if ((value || '').trim()) {
      for(let f of this.motscles){
        if(f.mCle.valueOf()== value.valueOf()){
          this.t= false;
          break;
        }
      }
      if(this.t){
        this.motscles.push({mCle: value.trim()});
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(mc: MotsClee): void {
    const index = this.motscles.indexOf(mc);

    if (index >= 0) {
      this.motscles.splice(index, 1);
    }
  }


  constructor(private httpClient:HttpClient, public ideeService:IdeeService) { }

  ngOnInit() {

    this.ideeService.getGenres()
      .subscribe(data=>{
        this.listegenres=data;
        console.log(this.listegenres);
      }, err =>{
        console.log("test",err);

      } );

    this.ideeService.getTypeIdees()
      .subscribe(data=>{
        this.listTypeIdees=data;
        console.log(this.listTypeIdees);
      }, err =>{
        console.log("test",err);

      } );





  }
  saveIdeeANDMotscle(){

   this.ideeService.saveIdee(this.idea).subscribe( data=>{
     console.log(data)
   }, err=>{
     console.log(err);
   })

   this.ideeService.saveMotsClee(this.motscles).subscribe( data=>{
     console.log(data)
   }, err=>{
     console.log(err);
   })

    console.log(this.idea)
    console.log(this.motscles)
this.idea= new Idea();



  }
ideeGenerees:any;
  genererDesIdees(){

   this.ideeService.genererDesIdees(this.idea).subscribe( data=>{ this.ideeGenerees=data;
     console.log(data)
   }, err=>{
     console.log(err);
   })

    console.log(this.ideeGenerees);
  }
}
