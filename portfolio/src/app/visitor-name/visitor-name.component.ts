import { Component, OnInit, Input } from '@angular/core';
import { VisitorProfileService } from '../visitor-profile.service';

@Component({
  selector: 'app-visitor-name',
  templateUrl: './visitor-name.component.html',
  styleUrls: ['./visitor-name.component.css'],
  providers: [VisitorProfileService]
})
export class VisitorNameComponent implements OnInit {
  visitorName: string;

  constructor(private visitorProfileService: VisitorProfileService) {
  }

  getVisitorName(): void {
    this.visitorName = this.visitorProfileService.getVisitorName();
  }

  ngOnInit() {
    this.getVisitorName();
  }

}
