import { Component, OnInit } from '@angular/core';
import { VisitorProfileService } from '../visitor-profile.service';

@Component({
  selector: 'app-visitor-name',
  templateUrl: './visitor-name.component.html',
  styleUrls: ['./visitor-name.component.css']
})
export class VisitorNameComponent implements OnInit {

  visitorName: string;

  constructor(private visitorProfileService: VisitorProfileService) {
  }

  getVisitorName(): void {
    this.visitorProfileService.visitorName
      .subscribe(name => this.visitorName = name);
  }

  ngOnInit() {
    this.getVisitorName();
  }

}
