import { Component, OnInit } from '@angular/core';
import { VisitorProfileService } from '../visitor-profile.service';
import { PROFILE } from '../mock-profile';

@Component({
  selector: 'app-selected-profile',
  templateUrl: './selected-profile.component.html',
  styleUrls: ['./selected-profile.component.css']
})
export class SelectedProfileComponent implements OnInit {

  profile = PROFILE[0];
  newUser: boolean;
  profileSelected: boolean;

  constructor(private visitorProfileService: VisitorProfileService) { }

  getUserStatus() {
    this.visitorProfileService.newUser
      .subscribe(status => this.newUser = status);
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
