import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VisitorsBookComponent } from './visitors-book/visitors-book.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { AvisComponent } from './avis/avis.component';
import { AddCommentaireComponent } from './add-commentaire/add-commentaire.component';
import { AvisnegatifComponent } from './avisnegatif/avisnegatif.component';
import { AvispositifComponent } from './avispositif/avispositif.component';

import { CommentairesService } from './services/commentaires.service';
import { AvisnegatifService } from './services/avisnegatif.service';
import { AvispositifService } from './services/avispositif.service';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { CommentsRoutingModule } from './comments-routing.module';

@NgModule({
  imports: [
    CommentsRoutingModule,
    CommonModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'avis-commentaires')
  ],
  declarations: [
    VisitorsBookComponent,
    CommentairesComponent,
    AvisComponent,
    AddCommentaireComponent,
    AvisnegatifComponent,
    AvispositifComponent
  ],
  providers: [CommentairesService, AvisnegatifService, AvispositifService],
})
export class CommentsModule { }
