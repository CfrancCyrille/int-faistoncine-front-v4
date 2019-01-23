import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationService } from '../_services/authentication.service';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AppRoutingModule 
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  providers: [AuthenticationService],
  exports: [LayoutComponent]
})
export class UiModule { }
