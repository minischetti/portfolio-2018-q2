import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../director.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

  line: any;
  title: string;
  helper: string;

  constructor(private directorService: DirectorService) { }

  getLine(command: string) {
    this.directorService.getLine(command);
    this.title = this.line.title;
  }

  ngOnInit() {
    this.line = this.directorService.line
      .subscribe(line => this.line = line);
    this.getLine('name');
  }

}
