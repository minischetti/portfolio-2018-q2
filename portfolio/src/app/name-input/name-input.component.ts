import { Component, OnInit } from '@angular/core';
import { VisitorProfileService } from '../visitor-profile.service';


@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent implements OnInit {

  constructor(private visitorProfileService: VisitorProfileService) { }

  newUser: boolean;

  onEnter(value: string) {
    value = this.cleanResponse(value);
    if (value) {
      if (this.newUser) {
        this.setVisitorName(value);
        this.setUserStatus(false);
      }
    }
  }

  cleanResponse(value: string) {
    return value.trim();
  }

  setVisitorName(name: string) {
    this.visitorProfileService.setVisitorName(name);
  }

  setUserStatus(status: boolean) {
    this.visitorProfileService.setUserStatus(status);
  }

  getUserStatus() {
    this.visitorProfileService.newUser
      .subscribe(status => this.newUser = status);
  }

  ngOnInit() {
    // this.setUserStatus(this.newUser);
    this.getUserStatus();
  }

}
