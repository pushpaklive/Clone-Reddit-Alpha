import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'edit-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() editThisArticle:Article;
  @Output() save = new EventEmitter<Boolean>(false);
  //will start here.. load components data from mlabs...
  constructor() { }

  ngOnInit() {
    console.log("editThisArticle : data : "+this.editThisArticle);
  }

  goBack(){

    this.save.emit(true);
  }
}
