import { Injectable } from '@angular/core';
import {Route, Router} from '@angular/router';
import { ThesaurusService } from './thesaurus.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private router: Router, private thesaurusService: ThesaurusService) { }

  extractWordsFromString(string: string): string[] {
    return string.split(' ');
  }

  cleanWords(words: string[]) {
    const cleanedWords: string[] = new Array<string>();
    words.forEach(word => {
      word = word.replace(/[^A-Za-z]/g, '');
      cleanedWords.push(word);
    });
    return cleanedWords;
  }

  matchRoute(string: string): string {
    const routes = this.router.config;
    const words = this.extractWordsFromString(string);
    const cleanedWords = this.cleanWords(words);
    let matchedRoute: string;
    routes.forEach(route => {
      const routePath = route.path;
      cleanedWords.forEach(word => {
        if (routePath.includes(word)) {
          matchedRoute = routePath;
        } else {
          const synonym = this.thesaurusService.findSynonyms(word);
          if (synonym) {
            matchedRoute = synonym;
          }
        }
      });
    });
    return matchedRoute;
  }
}
