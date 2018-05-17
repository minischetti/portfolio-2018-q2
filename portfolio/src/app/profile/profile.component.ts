import { Component, OnInit } from '@angular/core';
import { PROFILE } from '../mock-profile';
import { VisitorProfileService } from '../visitor-profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = PROFILE[0];
  newUser: boolean;
  profileSelected: boolean;

  constructor(private visitorProfileService: VisitorProfileService) { }

  getUserStatus() {
    this.visitorProfileService.newUser
      .subscribe(status => this.newUser = status);
  }

  setProfileStatus(profileStatus: boolean) {
    this.visitorProfileService.setProfileStatus(profileStatus);
  }

  getProfileStatus() {
    this.visitorProfileService.profileSelected
      .subscribe(profileStatus => this.profileSelected = profileStatus);
  }

  ngOnInit() {
    this.getUserStatus();
    this.getProfileStatus();
  }

}
