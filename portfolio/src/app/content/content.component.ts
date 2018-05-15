import { Component, OnInit } from '@angular/core';
import { PROFILE } from '../mock-profile';
import { VisitorProfileService } from '../visitor-profile.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

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
