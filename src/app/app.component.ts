import { Component, OnInit } from '@angular/core';
import { Article } from '../app/article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  article = new Article("","",0);
  newArticle:Article;
  newItem:any;
  articleArr = [];
  showList =  false;
  
  ngOnInit(){
      this.articleArr = [new Article("B","KKKKK",0),new Article("C","HHH",9), new Article("A","EEE",89)];
    }

  addItem(){    
    this.articleArr.push(this.article);
    this.articleArr.sort(function(a, b){
          console.log("sort : a: "+a+" b: "+b);
          var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
          if (nameA < nameB) //sort string ascending
              return -1 
          if (nameA > nameB)
              return 1
          return 0 //default return value (no sorting)
      });
    console.log("onInit() : articlesArr : "+this.articleArr.toLocaleString());
    this.article = new Article("","",0);
}

  deleteArticle(index){
    this.articleArr.splice(index, 1);
  }

  editArticle(article: Article){
    this.newArticle = article;
    console.log("editArticle () : newArticle --> "+this.newArticle);
  }

  recieveSavedValues($event){
    this.showList = $event;
    console.log("recieveSavedValues(): showList : "+this.showList);
  }
  
}
