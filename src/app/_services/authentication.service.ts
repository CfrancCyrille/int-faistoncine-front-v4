import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { AngularFirestore, AngularFirestoreDocument } from
'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import { switchMap } from 'rxjs/operators';

import * as firebase from 'firebase';

import { User } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public user: Observable<User>;

  currentUserUid;
  username;
  email;
  
  public pseudo;
  public photo;

  constructor(
      private af: AngularFireAuth,
      private afs: AngularFirestore,
      private router: Router) {

    //// Get auth data, then get firestore user document || null
    this.user = this.af.authState.pipe(
        switchMap(user => {
            if (user) {
                return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
            } else {
                return of(null)
            }
        })
      );
  }

  private oAuthLogin(provider) {
    return this.af.auth.signInWithPopup(provider)
        .then((credential) => {
            this.updateUserData(credential.user);
        })
        .catch(error => console.log(error));
  }

  private updateUserData(user: User) {
      const docUser: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      const data: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
        favoriteColor: user.favoriteColor || ''
      };

      this.photo = user.photoURL;
      this.pseudo = user.displayName;

      return docUser.set(data);
  }

  checkUsername(username: string) {
    username = username.toLowerCase()
    return this.afs.doc<User>(`usernames/${username}`);
  }

  updateUsername(username:string) {

    const docUser: AngularFirestoreDocument<User> = this.afs.doc(`users/${this.currentUserUid}`);

    // docUser.snapshotChanges().pipe(
    // map(actions => {
    //     return actions.map(a=> {
    //         const data: User = {
    //             uid: a.uid,
    //             email: a.email,
    //             username: a.username || '',
    //             displayName: a.displayName || '',
    //             photoURL: a.photoURL || '',
    //             favoriteColor: a.favoriteColor || ''
    //           };
    //         return data;
    //     }
    //     )
    // }));

    // this.currentUserUid = user.uid;
    // this.username = user.username;

    // return docUser.set(data);
  }

  googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      return this.oAuthLogin(provider);
  }

  signOut(): void {
    this.af.auth.signOut();
    this.router.navigate(['/'])
  }
}
