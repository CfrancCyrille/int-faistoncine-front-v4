import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;
  userPicture;
  userPseudo;

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.userPicture = null;
    this.userPseudo = "guest";
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  googleLogin(){
    this.authenticationService.googleLogin().then(() => {
      this.userPicture = this.authenticationService.photo;
      this.userPseudo = this.authenticationService.pseudo;
    });
  }

  getUserPicture(){
    return this.userPicture;
  }

  getUserPseudo(){
    return this.userPseudo;
  }

  logout(): void {
    this.authenticationService.signOut();
    this.userPicture = null;
    this.userPseudo = "guest";
  }
}
