import { Component, OnInit } from '@angular/core';
import { VisitorProfileService } from '../visitor-profile.service';
import { Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css'],
  animations: [
    trigger('titleAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-50%)' })),
      state('*', style({ opacity: 1, })),
      transition(':enter, :leave', animate('1s ease-in-out'))
    ]),
    trigger('inputAnimation', [
      state('void', style({ transform: 'scaleX(0)' })),
      state('*', style({ transform: 'scaleX(1)', })),
      transition(':enter, :leave', animate('1s .5s ease-in-out'))
    ])
  ]
})
export class NameInputComponent implements OnInit {

  constructor(private router: Router, private visitorProfileService: VisitorProfileService) { }

  onEnter(value: string) {
    value = value.trim();
    if (value) {
      this.setVisitorName(value);
      this.router.navigateByUrl('profile/choose');
    }
  }

  setVisitorName(name: string) {
    this.visitorProfileService.setVisitorName(name);
  }

  ngOnInit() { }

}
