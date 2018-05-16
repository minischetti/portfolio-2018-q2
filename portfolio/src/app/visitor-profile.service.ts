import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitorProfileService {

  private currentCommand: string;

  newUser = new BehaviorSubject<boolean>(true);
  profileSelected = new BehaviorSubject<boolean>(false);
  visitorName = new Subject<string>();

  constructor() { }

  setUserStatus(userStatus: boolean) {
    this.newUser.next(userStatus);
  }

  setProfileStatus(profileStatus: boolean) {
    this.profileSelected.next(profileStatus);
  }

  setVisitorName(name: string) {
    this.visitorName.next(name);
  }

  // OLD

  getCurrentCommand() {
    return this.currentCommand;
  }

  setCurrentCommand(command: string) {
    this.currentCommand = command;
  }

}
