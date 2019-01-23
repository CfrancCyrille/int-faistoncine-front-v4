import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Avisnegatif } from '../models/avisnegatif';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvisnegatifService {
  public AvisnegatifCollection: AngularFirestoreCollection<Avisnegatif>;
  public avisnegatif: Observable<Avisnegatif[]>;
  avisnegatifDoc: AngularFirestoreDocument<Avisnegatif>;

  constructor(public afs: AngularFirestore) {
    //this.commentaires = this.afs.collection('commentaires').valueChanges();

    this.AvisnegatifCollection = this.afs.collection('avisnegatif', ref => ref.orderBy('id', 'asc'));

    this.avisnegatif = this.afs.collection('avisnegatif').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Avisnegatif;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

   }

   getCollection(col){
     return this.afs.collection(col);
   }

   getAvisnegatif() {
     return this.avisnegatif;
   }

   addAvisnegatif(avisnegatif: Avisnegatif) {
    this.AvisnegatifCollection.add(avisnegatif);
   }
}
