import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Avis } from '../models/avis';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  AvisCollection: AngularFirestoreCollection<Avis>;
  avis: Observable<Avis[]>;
  avisDoc: AngularFirestoreDocument<Avis>;

  constructor(public afs: AngularFirestore) {
    this.AvisCollection = this.afs.collection('avis', ref => ref.orderBy('greennumber', 'asc'));

    this.avis = this.afs.collection('avis').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Avis;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }

   getAvis() {
    return this.avis;
  }

  addGreenThumb(avis: Avis) {
    this.avisDoc = this.afs.doc(`avis/${avis.id}`);
    this.avisDoc.valueChanges();
  }
}
