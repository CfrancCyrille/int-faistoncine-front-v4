import { Component, OnInit } from '@angular/core';
import { AvisService } from './../services/avis.service';
import { Avis } from '../models/avis';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  avis: Avis[];

  greenimage : string="assets/images/poucevert.jpg";
  redimage : string="assets/images/poucerouge.jpg";

  greenCount:number=0;
  redCount:number=0;

  greenThumb() {
    this.greenCount += 1;
  }

  redThumb() {
    this.redCount += 1;
  }

  constructor(private avisService: AvisService) { }

  ngOnInit() {
  }

  onGreenThumb() {
      this.avisService.addGreenThumb(this.avis[this.greenCount]);
  }
  

}
