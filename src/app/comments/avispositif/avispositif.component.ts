import { Component, OnInit } from '@angular/core';
import { AvispositifService } from './../services/avispositif.service';
import { Avispositif } from '../models/avispositif';


@Component({
  selector: 'app-avispositif',
  templateUrl: './avispositif.component.html',
  styleUrls: ['./avispositif.component.css']
})
export class AvispositifComponent implements OnInit {
  avispositif: Avispositif = {
    number:1
}
size;

green:number;

greenimage : string="assets/images/poucevert.jpg";
redimage : string="assets/images/poucerouge.jpg";

  constructor(private avispositifService: AvispositifService) { }

  ngOnInit() {
    this.avispositifService.getCollection('avispositif').ref.get().then(snap => { this.green = snap.size });
  }

  onGreenThumb() {
    
    this.avispositifService.addAvispositif(this.avispositif);
    this.avispositifService.getCollection('avispositif').ref.get().then(snap => { this.green = snap.size });
  }
}
