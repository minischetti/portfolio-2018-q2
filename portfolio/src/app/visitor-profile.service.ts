import { Injectable } from '@angular/core';
import {Subject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitorProfileService {

  private newUser = true;
  // private visitorName: string;
  private currentCommand: string;

  visitorName = new Subject<string>();
  // visitorName = this.visitorNameSource.asObservable();


  constructor() { }

  getUserStatus() {
    return this.newUser;
  }

  setUserStatus(userStatus: boolean) {
    this.newUser = userStatus;
  }

  // getVisitorName(): Observable<string> {
  //   return of(this.visitorName);
  // }

  // getVisitorName() {
  //   return this.visitorName;
  // }

  setVisitorName(name: string) {
    this.visitorName.next(name);
  }

  getCurrentCommand() {
    return this.currentCommand;
  }

  setCurrentCommand(command: string) {
    this.currentCommand = command;
  }

}
