import { Component, OnInit } from '@angular/core';
import { PROFILE } from '../mock-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = PROFILE[0];

  constructor() { }

  ngOnInit() {
  }

}
