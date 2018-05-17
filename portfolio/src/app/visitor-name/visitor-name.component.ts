import { Component, OnInit } from '@angular/core';
import { VisitorProfileService } from '../visitor-profile.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-visitor-name',
  templateUrl: './visitor-name.component.html',
  styleUrls: ['./visitor-name.component.css']
})
export class VisitorNameComponent implements OnInit {

  visitorName: string;
  currentLocation: string;

  constructor(private visitorProfileService: VisitorProfileService,
              private router: Router) {
  }

  getVisitorName(): void {
    this.visitorProfileService.visitorName
      .subscribe(name => this.visitorName = name);
  }

  getCurrentLocation(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentLocation = event.url;
      }
    });
  }

  ngOnInit() {
    this.getVisitorName();
    this.getCurrentLocation();
  }

}
