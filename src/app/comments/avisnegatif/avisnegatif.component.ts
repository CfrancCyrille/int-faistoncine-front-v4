import { Component, OnInit } from '@angular/core';
import { AvisnegatifService } from './../services/avisnegatif.service';
import { Avisnegatif } from '../models/avisnegatif';

@Component({
  selector: 'app-avisnegatif',
  templateUrl: './avisnegatif.component.html',
  styleUrls: ['./avisnegatif.component.css']
})
export class AvisnegatifComponent implements OnInit {
  
  avisnegatif: Avisnegatif = {
      number:1
  }
  size;

  red:number;

  greenimage : string="assets/images/poucevert.jpg";
  redimage : string="assets/images/poucerouge.jpg";

  constructor(private avisnegatifService: AvisnegatifService) { }

  ngOnInit() {
    this.avisnegatifService.getCollection('avisnegatif').ref.get().then(snap => { this.red = snap.size });
  }

  onRedThumb() {
    
      this.avisnegatifService.addAvisnegatif(this.avisnegatif);
      this.avisnegatifService.getCollection('avisnegatif').ref.get().then(snap => { this.red = snap.size });
    }
  
}
