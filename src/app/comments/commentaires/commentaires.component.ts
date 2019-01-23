import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core' ;
import { CommentairesService } from './../services/commentaires.service';
import { Commentaire } from '../models/commentaires';


@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})

//@Injectable()
export class CommentairesComponent implements OnInit {

commentaires: Commentaire[];
editState: boolean = false;
commentaireToEdit: Commentaire;

  /*id : number;
  author : string;
  date : Date;
  text : string;

  comments = [{
    "id": 1,
    "author": "joe",
    "date": new Date(),
    "text": "Ce scénar est génial"
    
    }, {
      "id": 2,
      "author": "jim",
      "date": new Date(),
      "text": "cette idée est vraiment stupide"
    }, {
      "id": 3,
      "author": "jack",
      "date": new Date(),
      "text": "mouais bof j'ai pas d'avis"
    }];*/

  isCommentDisplayed : boolean=false;

  newtext :'';

  displayComments() {
    this.isCommentDisplayed=true;
  }

  hideComments() {
    this.isCommentDisplayed=false;
  }

  /*addComment() {
   var comment = {
    "id": 4,
    "author": "jo",
    "date": new Date(),
    "text": this.newtext
    }
 
    if (this.newtext == null){
      alert("texte vide !");
    } else {
    this.comments.push(comment);
    }

  }*/

  deleteCommentaire(event, commentaire: Commentaire) {
    this.clearState();
    this.commentairesService.deleteCommentaire(commentaire);
  }

  editCommentaire(event, commentaire: Commentaire) {
    this.editState = true;
    this.commentaireToEdit = commentaire;
  }

  updateCommentaire(commentaire: Commentaire) {
    this.commentairesService.updateCommentaire(commentaire);
    this.clearState();

  }

  clearState() {
    this.editState = false;
    this.commentaireToEdit=null;
  }

  constructor(private commentairesService: CommentairesService) { }

  ngOnInit() {
    this.commentairesService.getCommentaires().subscribe(commentaires => {
      //console.log(commentaires);
      this.commentaires = commentaires;
    });
  }

}
