import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../director.service';
import { VisitorProfileService } from '../visitor-profile.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css'],
  animations: [
    trigger('titleAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-25%)' })),
      state('*', style({ opacity: 1, })),
      transition(':enter, :leave', animate('1s ease-in-out'))
    ]),
    trigger('helperAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1, })),
      transition(':enter, :leave', animate('1s .5s ease-in-out'))
    ])
  ]
})
export class DirectorComponent implements OnInit {

  line: any = '';
  visitorName = '';

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

  ngOnInit() {
    this.getVisitorName();
    this.getLine();
  }

}
