import {Genre} from './model.genre';
import {TypeIdee} from './model.typeIdee';

export class Idea {

  titre: string;
  idee: any;
  dateCreation: Date;
  genre:Genre;
  typeIdee:TypeIdee;

  deserialize(gr: any): Idea {
    Object.assign(this, gr);
    this.genre = new Genre().deserialize(gr.genre);
    return this;
  }
}
