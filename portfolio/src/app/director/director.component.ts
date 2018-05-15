import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../director.service';
import { VisitorProfileService } from '../visitor-profile.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

  profileSelected: boolean;

  line: any;
  title: string;
  helper: string;

  constructor(private directorService: DirectorService, private visitorProfileService: VisitorProfileService) { }

  getLine(command: string) {
    this.directorService.getLine(command);
    this.title = this.line.title;
  }

  getProfileStatus(): void {
    this.visitorProfileService.profileSelected
      .subscribe(status => this.profileSelected = status);
  }

  ngOnInit() {
    this.getProfileStatus();
    this.line = this.directorService.line
      .subscribe(line => this.line = line);
  }

}
