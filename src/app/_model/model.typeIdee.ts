import {Deserializable} from './model.deserializable';

export class TypeIdee implements Deserializable {

  typeIdee:string;
  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
