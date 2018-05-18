import { Component, OnInit } from '@angular/core';
import { PROFILE } from '../mock-profile';
import { VisitorProfileService } from '../visitor-profile.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [
    trigger('animation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter, :leave', animate('.5s ease-in-out'))
    ])
  ]
})
export class ContentComponent implements OnInit {

  profile = PROFILE[0];

  constructor() { }

  ngOnInit() { }

}
