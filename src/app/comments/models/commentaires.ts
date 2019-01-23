/*export class Commentaires {
    // Convert JSON to Product
public static fromJson(json: Object): Commentaires {
    return new Commentaires (
    json[ 'id' ],
    json[ 'author' ],
    new Date(json[ 'date' ]),
    json[ 'text' ]
    );
    }
    // Define Product model
    constructor(public id: number,
    public author: string,
    public date: Date,
    public text: string) {
    }
    }*/
    export interface Commentaire {
        id?:string;
        author?:string;
        date?:Date;
        text?:string;
        idIdee?:number;
      }
