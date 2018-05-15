import { Component, OnInit } from '@angular/core';
import { VisitorProfileService } from '../visitor-profile.service';
import { DirectorComponent } from '../director/director.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private visitorProfileService: VisitorProfileService, private directorComponent: DirectorComponent) { }

  newUser = true;
  value = '';

  onEnter(value: string) {
    value = this.cleanResponse(value);
    if (value) {
      if (this.newUser) {
        this.setVisitorName(value);
        this.setUserStatus(false);
      } else {
        this.value = value;
        this.directorComponent.getLine(value);
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

  setProfileStatus(status: boolean) {
    this.visitorProfileService.setProfileStatus(status);
  }

  ngOnInit() {
    this.setUserStatus(this.newUser);
    this.getUserStatus();
  }
}
