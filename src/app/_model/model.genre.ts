import {Deserializable} from './model.deserializable';

export class Genre  implements Deserializable {
  idGenre:number;
  genre: string;

  deserialize(input: any): this {
    Object.assign(this, input);

    return this;
  }
}
