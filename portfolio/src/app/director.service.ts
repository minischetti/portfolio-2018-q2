import { Injectable } from '@angular/core';
import { DIRECTOR } from './director-lines';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private directorLines = DIRECTOR;

  line = new Subject();

  constructor() { }

  setLine(command: string): void {
    this.directorLines.forEach((line: any) => {
      if (line.state === command) {
        this.line.next(line);
      }
    });
  }

}
