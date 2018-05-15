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

  newUser: boolean;
  value = '';

  onEnter(value: string) {
    if (this.newUser) {
      this.visitorProfileService.setVisitorName(value);
      this.visitorProfileService.setUserStatus(false);
    } else {
      this.value = value;
    }
    this.getUserStatus();
    this.directorComponent.getLine(value);
  }

  getUserStatus() {
    this.newUser = this.visitorProfileService.getUserStatus();
  }

  ngOnInit() {
    this.getUserStatus();
  }
}
