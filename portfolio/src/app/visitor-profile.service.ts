import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitorProfileService {

  // private newUser = true;
  // private profileSelected = false;
  private currentCommand: string;

  newUser = new BehaviorSubject<boolean>(true);
  profileSelected = new BehaviorSubject<boolean>(false);
  visitorName = new Subject<string>();

  constructor() { }

  // getUserStatus() {
  //   return this.newUser;
  // }
  //
  // setUserStatus(userStatus: boolean) {
  //   this.newUser = userStatus;
  // }
  //
  // getProfileStatus() {
  //   return this.profileSelected;
  // }
  //
  // setProfileStatus(profileStatus: boolean) {
  //   this.profileSelected = profileStatus;
  // }

  // getVisitorName(): Observable<string> {
  //   return of(this.visitorName);
  // }

  // getVisitorName() {
  //   return this.visitorName;
  // }

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
