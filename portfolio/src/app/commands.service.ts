import { Injectable } from '@angular/core';
import { COMMANDS } from './commands';

@Injectable({
  providedIn: 'root'
})
export class CommandsService {

  constructor() { }

  commands = COMMANDS;

  findSynonyms(word: string) {
    for (let i = 0; i < this.commands.length; i++) {
      if (this.commands[i].synonyms.includes(word)) {
        return this.commands[i].destination;
      }
    }
  }
}
