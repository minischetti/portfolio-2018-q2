import { Component, OnInit } from '@angular/core';
import { VisitorProfileService } from '../visitor-profile.service';
import { PROFILE } from '../mock-profile';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-selected-profile',
  templateUrl: './selected-profile.component.html',
  styleUrls: ['./selected-profile.component.css'],
  animations: [
    trigger('imageAnimation', [
      state('void', style({ opacity: 0, transform: 'scale(0)' })),
      state('*', style({ opacity: 1, transform: 'scale(1)' })),
      transition(':enter, :leave', animate('.5s ease-in-out'))
    ]),
    trigger('textAnimation', [
      state('void', style({ opacity: 0, transform: 'translateX(-10px)' })),
      state('*', style({ opacity: 1, transform: 'translateX(0)' })),
      transition(':enter, :leave', animate(500))
    ]),
  ]
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
