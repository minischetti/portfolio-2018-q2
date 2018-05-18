import { Component, OnInit } from '@angular/core';
import { VisitorProfileService } from '../visitor-profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
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
