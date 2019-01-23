import { Component, OnInit } from '@angular/core';
import { CommentairesService } from './../services/commentaires.service';
import { Commentaire } from './../models/commentaires';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-commentaire',
  templateUrl: './add-commentaire.component.html',
  styleUrls: ['./add-commentaire.component.css']
})
export class AddCommentaireComponent implements OnInit {
  CommentairesCollection: AngularFirestoreCollection<Commentaire>;
  commentaires: Observable<Commentaire[]>;
  commentaireDoc: AngularFirestoreDocument<Commentaire>;
  commentaire: Commentaire = {
    text:''
  }

  constructor(
    private commentairesService: CommentairesService, 
    private afs:AngularFirestore) {
      this.CommentairesCollection = this.afs.collection('commentaires', ref => ref.orderBy('text','asc'))
   }

  ngOnInit() {
  }

  /*onSubmit() {
    if(this.commentaire.text != '' ){
      this.commentairesService.addCommentaire(this.commentaire);
      this.commentaire.text = '';
    }
  }*/

  spamDetector(){
    this.callback(this.commentairesService, this.commentaire);
  }

  callback(cs: CommentairesService, c:Commentaire) {
    this.CommentairesCollection.ref.where("text", "==", c.text).get().then(
      function(r) {
        if (r.size===0) {
          if(c.text != '') {
            cs.addCommentaire(c);
            c.text='';
          } else {
            alert("text vide !")
          }
        }
        else {
          alert("probleme");
        }
      }
    )
  }



}
