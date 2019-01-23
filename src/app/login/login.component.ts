import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

import { AngularFireList } from 'angularfire2/database';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from
'angularfire2/firestore';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../_model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pseudoForm: FormGroup;

  usernameText: string;
  usernameAvailable: boolean;

  items: AngularFirestoreCollection<any[]>;
  
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private afs: AngularFirestore) { 
    this.items = afs.collection('/items');
  }

  ngOnInit() {
    this.pseudoForm = this.formBuilder.group({
      pseudo: ['', Validators.required]
  });
  }
  
  checkUsername() {
    this.authenticationService.checkUsername(this.usernameText).ref.onSnapshot(function(username){
      this.usernameAvailable = !username;
    })
  }

  updateUsername() {
    this.authenticationService.updateUsername(this.usernameText)
  }

  signInWithGoogle(): void {
      this.authenticationService.googleLogin()
      .then(() => this.afterSignIn());
  }
  
  private afterSignIn(): void {
        // Do after login stuff here, such router redirects, toast messages, etc.
     this.router.navigate(['/']);
  }

  onSubmit(){  

    // // stop here if form is invalid
    // if (this.pseudoForm.invalid) {
    //   return;
    // }

    let pseudo = this.pseudoForm.controls.pseudo.value;
    this.authenticationService.updateUsername(pseudo);

  this.router.navigate(['/home']);

  console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD OUI");
  }

} 
