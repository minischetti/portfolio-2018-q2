import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private router: Router) { }

  value = '';
  // currentLocation: string;
  // isSearchDisplayed: boolean;

  onEnter(value: string) {
    value = value.trim();
    if (value) {
      this.value = value;
      this.router.navigateByUrl(this.value);
    }
  }

  getCurrentLocation() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // this.currentLocation = event.url;
        this.displaySearch(event.url);
      }
    });
  }

  displaySearch(currentUrl: string): void {
    const homeUrl = '/';
    const chooseProfileUrl = '/profile/choose';
    if (currentUrl === homeUrl || currentUrl === chooseProfileUrl) {
      this.isSearchDisplayed = false;
    } else {
      this.isSearchDisplayed = true;
    }
  }

  ngOnInit() {
    this.getCurrentLocation();
  }
}
