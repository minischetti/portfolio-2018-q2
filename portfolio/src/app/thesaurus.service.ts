import { Injectable } from '@angular/core';
import { THESAURUS } from './thesaurus';

@Injectable({
  providedIn: 'root'
})
export class ThesaurusService {

  constructor() { }

  thesaurus = THESAURUS;

  findSynonyms(word: string) {
    for (let i = 0; i < this.thesaurus.length; i++) {
      if (this.thesaurus[i].synonyms.includes(word)) {
        return this.thesaurus[i].route;
      }
    }
  }
}
