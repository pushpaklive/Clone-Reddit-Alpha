export class Article {
    title:String;
    details:String;
    votes:Number;

    constructor(
        title: String,
        details: String,
        votes: Number
    ) {
     this.title = title;
     this.details = details;
     this.votes = votes;
    }

   voteUp(): void {
       this.votes =+ 1;
   } 

   voteDown(): void {
       this.votes =- 1;
   }
}