import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Commentaire } from '../models/commentaires';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Idea} from '../../_model/model.idea';

@Injectable({
  providedIn: 'root'
})
export class CommentairesService {
  CommentairesCollection: AngularFirestoreCollection<Commentaire>;
  commentaires: Observable<Commentaire[]>;
  commentaireDoc: AngularFirestoreDocument<Commentaire>;


  constructor(public afs: AngularFirestore) {
    //this.commentaires = this.afs.collection('commentaires').valueChanges();

    this.CommentairesCollection = this.afs.collection('commentaires', ref =>
      ref.orderBy('text','asc'));

    this.commentaires = this.afs.collection('commentaires', ref =>
      ref.orderBy('text','asc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Commentaire;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    /*this.commentaires = this.afs.collection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Commentaire;
        data.id = a.payload.doc.id;
        return data;
      });
    });*/
   }

   getCommentaires() {
     return this.commentaires;
   }
   getCommmentairesByIdIdee(i:number){
     return   this.commentaires = this.afs.collection('commentaires', ref =>
       ref.orderBy('idIdee','asc').startAt(i).endAt(i)).snapshotChanges().pipe(map(changes => {
       return changes.map(a => {
         const data = a.payload.doc.data() as Commentaire;
         data.id = a.payload.doc.id;
         return data;

       });
     }));




   }

   addCommentaire(commentaire: Commentaire) {
     commentaire.idIdee=1;
     //commentaire.idIdee=idIdeeSelected
    this.CommentairesCollection.add(commentaire);
   }

   deleteCommentaire(commentaire: Commentaire) {
     this.commentaireDoc = this.afs.doc(`commentaires/${commentaire.id}`);
     this.commentaireDoc.delete();
   }

   updateCommentaire(commentaire: Commentaire) {
    this.commentaireDoc = this.afs.doc(`commentaires/${commentaire.id}`);
    this.commentaireDoc.update(commentaire);
   }
}

