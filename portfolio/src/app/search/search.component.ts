import { Component, OnInit } from '@angular/core';
import { DirectorComponent } from '../director/director.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor( private directorComponent: DirectorComponent) { }

  value = '';

  onEnter(value: string) {
    value = value.trim();
    this.value = value;
    this.directorComponent.getLine(value);
  }

  ngOnInit() {
  }
}
