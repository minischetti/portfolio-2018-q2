import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitorProfileService {

  visitorName = new Subject<string>();

  constructor() { }

  setVisitorName(name: string) {
    this.visitorName.next(name);
  }

}
