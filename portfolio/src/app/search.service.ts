import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ThesaurusService } from './thesaurus.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private router: Router, private thesaurusService: ThesaurusService) { }

  matchRoute(value: string): string {
    const routes = this.router.config;
    const words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      const cleanedWord = words[i].replace(/[^A-Za-z0-9]/g, '');
      for (let k = 0; k < routes.length; k++) {
        if (!routes[k].data.excludeFromSearch) {
          if ((routes[k].path).includes(cleanedWord)) {
            return routes[k].path;
          } else {
            return this.thesaurusService.findSynonyms(cleanedWord);
          }
        }
      }
    }
  }
}
