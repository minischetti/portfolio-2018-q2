import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorProfileService {

  private newUser = true;
  private visitorName: string;
  private currentCommand: string;

  constructor() { }

  getUserStatus() {
    return this.newUser;
  }

  setUserStatus(userStatus: boolean) {
    this.newUser = userStatus;
  }

  getVisitorName() {
    return this.visitorName;
  }

  setVisitorName(name: string) {
    this.visitorName = name;
  }

  getCurrentCommand() {
    return this.currentCommand;
  }

  setCurrentCommand(command: string) {
    this.currentCommand = command;
  }

}
