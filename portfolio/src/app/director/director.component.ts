import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../director.service';
import { VisitorProfileService } from '../visitor-profile.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

  newUser: boolean;
  visitorName: string;
  profileSelected: boolean;

  line: any;
  // title: string;
  // helper: string;

  constructor(private router: Router,
              private location: Location,
              private directorService: DirectorService,
              private visitorProfileService: VisitorProfileService) { }

  getLine() {
    this.directorService.line
      .subscribe(line => this.line = line);
  }

  getUserStatus() {
    this.visitorProfileService.newUser
      .subscribe(status => this.newUser = status);
  }

  getVisitorName(): void {
    this.visitorProfileService.visitorName
      .subscribe(name => this.visitorName = name);
  }

  getProfileStatus(): void {
    this.visitorProfileService.profileSelected
      .subscribe(status => this.profileSelected = status);
  }

  ngOnInit() {
    this.getUserStatus();
    this.getProfileStatus();
    this.getVisitorName();
    this.getLine();
  }

}
