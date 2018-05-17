import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private router: Router) { }

  value = '';

  onEnter(value: string) {
    value = value.trim();
    if (value) {
      this.value = value;
      this.router.navigateByUrl(this.value);
    }
  }

  ngOnInit() {
  }
}
