import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../SERVICE/article.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})


export class ArticleCardComponent implements OnInit {

  articles:any[] =[];
  filteredText!: string;
  
  constructor(private articleService:ArticleService){
  }
  ngOnInit(): void {

    this.loadArticles();
  }
  loadArticles(){
    this.articleService.getArticles().subscribe(
      (response: any) => {
        this.articles = response.results.map((article: any) => ({...article,}));
     
      },
      (error) => {
        console.error('Error fetching articles:', error);
      });
  }
  

onFilterChange(filteredText:string){
this.filteredText = filteredText
}

}
