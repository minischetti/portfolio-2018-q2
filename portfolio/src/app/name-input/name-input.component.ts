import { Component, OnInit } from '@angular/core';
import { VisitorProfileService } from '../visitor-profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent implements OnInit {

  constructor(private router: Router, private visitorProfileService: VisitorProfileService) { }

  newUser: boolean;

  onEnter(value: string) {
    value = this.cleanResponse(value);
    if (value) {
      this.setVisitorName(value);
      this.setUserStatus(false);
      this.router.navigateByUrl('profile/choose');
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
    this.getUserStatus();
  }

}
