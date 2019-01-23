import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Idea} from '../_model/model.idea';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {MotsClee} from '../_model/model.motsClee';


@Injectable()
export class IdeeService {

  form: FormGroup;
  constructor(public http: HttpClient) {

  }

  getGenres() {
    return this.http.get('http://localhost:8090/genres');
  }

  getIdees() {
    return this.http.get('http://localhost:8090/idees');
  }

  getTypeIdees() {
    return this.http.get('http://localhost:8090/typeIdees');
  }

  saveIdee(idee:Idea) {
    return this.http.post('http://localhost:8090/idees',idee);
  }
  saveMotsClee(mc:any) {
    return this.http.post('http://localhost:8090/motscles',mc);
  }

  genererDesIdees(idee:Idea){
    return this.http.post('http://localhost:8090/idees/ideesByGenre',idee);
  }

  saveIdeeANDMotscle(idee:Idea,listMc:any){
    {

      return this.http.post('http://localhost:8090/saveIdeeANDMotcle'+idee, idee,listMc );

    }
  }
}
