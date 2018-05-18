import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../director.service';
import { VisitorProfileService } from '../visitor-profile.service';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css'],
  animations: [
    trigger('titleAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-25%)' })),
      state('*', style({ opacity: 1, })),
      transition(':enter, :leave', animate(500))
    ]),
    trigger('helperAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1, })),
      transition(':enter, :leave', animate(500))
    ])
  ]
})
export class DirectorComponent implements OnInit {

  visitorName: string;
  currentLocation: string;

  line: any;

  constructor(private router: Router,
              private location: Location,
              private directorService: DirectorService,
              private visitorProfileService: VisitorProfileService) { }

  getLine(): void {
    this.directorService.line
      .subscribe(line => this.line = line);
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
    this.getLine();
    this.getCurrentLocation();
  }

}
