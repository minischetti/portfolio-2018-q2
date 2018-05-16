import { Injectable } from '@angular/core';
import { DIRECTOR } from './director-lines';
import { Subject } from 'rxjs';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private directorLines = DIRECTOR;

  line = new Subject();

  constructor(private location: Location, private router: Router, private activatedRoute: ActivatedRoute) { }

  setLine(): void {
    this.directorLines.forEach((line: any) => {
      if (line.path === '') {
        this.line.next(line);
      }
    });
  }

}
