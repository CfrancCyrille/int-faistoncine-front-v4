import { Component, OnInit } from '@angular/core';

import { Commentaire } from '../models/commentaires';

import { CommentairesService } from '../services/commentaires.service';
import {ListeDesIdeesComponent} from '../../liste-des-idees/liste-des-idees.component';

@Component({
  selector: 'app-visitors-book',
  templateUrl: './visitors-book.component.html',
  styleUrls: ['./visitors-book.component.css']
})
export class VisitorsBookComponent implements OnInit {

  listeDesIdeesComponent:ListeDesIdeesComponent;
  commentaires: Commentaire[];
  editState: boolean = false;
  commentaireToEdit: Commentaire;

  isCommentDisplayed : boolean=false;
  newtext :'';

  idIdeeSelected:number;

  constructor(private commentairesService: CommentairesService) { }

  ngOnInit() {
   // if (this.listeDesIdeesComponent.idIdee) {
      //this.idIdeeSelected = this.listeDesIdeesComponent.idIdee;
    this.idIdeeSelected = 1;
      this.commentairesService.getCommmentairesByIdIdee(this.idIdeeSelected).subscribe(commentaires => {
        //console.log(commentaires);
        this.commentaires = commentaires;

      });
   /* this.commentairesService.getCommentaires().subscribe(commentaires => {
      //console.log(commentaires);
      this.commentaires = commentaires;

    });
*/
  }

  displayComments() {
    this.isCommentDisplayed=true;
  }

  hideComments() {
    this.isCommentDisplayed=false;
  }

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
}
