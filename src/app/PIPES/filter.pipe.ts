import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlightFilter'
})
export class FilterPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  private highlightText(text: string, filter: string): SafeHtml {
    const keywords = filter.split(/\s+/).map(keyword => keyword.replace(/[^a-zA-Z0-9']/g, '\\$&'));
    const regex = new RegExp(keywords.join('|'), 'gi');
    const highlightedText = text.replace(regex, match => `<span style="background-color: yellow; font-weight: bold">${match}</span>`);
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
  

  transform(articles: any[], filteredText: string) {
    if (!articles || !filteredText) {
      return articles;
    }
  
    const lowercaseFilter = filteredText.toLowerCase();
    const lowercaseFilterWords = lowercaseFilter.split(/\s+/);
  
    return articles.filter((article: any) => {
      const title = article.title.toLowerCase();
      const summary = article.summary.toLowerCase();
  
      return lowercaseFilterWords.every(filterWord => {
        const sanitizedFilterWord = filterWord.replace(/[^a-zA-Z0-9'-]/g, '');
        const keywordMatches = title.includes(sanitizedFilterWord) || summary.includes(sanitizedFilterWord);
        const withApostropheMatches = title.includes(`${sanitizedFilterWord}'`) || summary.includes(`${sanitizedFilterWord}'`);
        return keywordMatches || withApostropheMatches;
      });
    }).map((article: any) => {
      const title = article.title;
      const summary = article.summary;
  
      const highlightedFileterTitle = this.highlightText(title, lowercaseFilter);
      const highlightedFileterSummary = this.highlightText(summary, lowercaseFilter);
  
      return {
        ...article,
        title: highlightedFileterTitle,
        summary: highlightedFileterSummary,
      };
    });
  }
  
}
