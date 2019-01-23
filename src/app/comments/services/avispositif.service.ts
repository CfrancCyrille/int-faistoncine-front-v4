import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Avispositif } from '../models/avispositif';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvispositifService {
  public AvispositifCollection: AngularFirestoreCollection<Avispositif>;
  public avispositif: Observable<Avispositif[]>;
  avispositifDoc: AngularFirestoreDocument<Avispositif>;

  constructor(public afs: AngularFirestore) {
    //this.commentaires = this.afs.collection('commentaires').valueChanges();

    this.AvispositifCollection = this.afs.collection('avispositif', ref => ref.orderBy('id', 'asc'));

    this.avispositif = this.afs.collection('avispositif').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Avispositif;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

   }

   getCollection(col){
     return this.afs.collection(col);
   }

   getAvispositif() {
     return this.avispositif;
   }

   addAvispositif(avispositif: Avispositif) {
    this.AvispositifCollection.add(avispositif);
   }
}
