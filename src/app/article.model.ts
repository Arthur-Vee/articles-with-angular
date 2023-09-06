export interface ApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Article[];
  }
  
  export class Article {
  }