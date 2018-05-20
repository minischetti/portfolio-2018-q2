import { Injectable } from '@angular/core';
import { DIRECTOR } from './director-lines';
import { Subject } from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private directorLines = DIRECTOR;

  line = new Subject();

  constructor(private location: Location, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/not-found') {
          this.setLine('/not-found');
        } else {
          this.setLine(event.url);
        }
      }
    });
  }

  setLine(url: string): void {
    this.directorLines.forEach((line: any) => {
      if (line.path === url) {
        this.line.next(line);
      }
    });
  }

}
