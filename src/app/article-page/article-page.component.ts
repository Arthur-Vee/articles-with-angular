import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../SERVICE/article.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent {

constructor(private route:ActivatedRoute, private articleService:ArticleService){}
articleId:any
article:any
ngOnInit(): void{
this.route.params.subscribe(params => {
  this.articleId = params['id'];
  this.loadArticle()
})
}
loadArticle(){
  this.articleService.getArticleById(this.articleId).subscribe(response => {
    this.article = response
  },
  (error)=>{
    console.error("error fetching article: "+error)
  });
}
}
