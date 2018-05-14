import { Component, OnInit } from '@angular/core';
import { VisitorProfileService } from '../visitor-profile.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private visitorProfileService: VisitorProfileService) { }

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
  }

  getUserStatus() {
    this.newUser = this.visitorProfileService.getUserStatus();
  }

  ngOnInit() {
    this.getUserStatus();
  }
}
