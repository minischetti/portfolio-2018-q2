import { Component, OnInit } from '@angular/core';
import {VisitorProfileService } from '../visitor-profile.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {

  constructor(private visitorProfileService: VisitorProfileService) { }

  newUser = true;
  profileSelected = false;

  getUserStatus() {
    this.visitorProfileService.newUser
      .subscribe(status => this.newUser = status);
  }

  getProfileStatus() {
    this.visitorProfileService.profileSelected
      .subscribe(status => this.profileSelected = status);
  }

  ngOnInit() {
    this.getUserStatus();
    this.getProfileStatus();
  }

}
