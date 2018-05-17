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
  isSearchDisplayed: boolean;

  onEnter(value: string) {
    value = value.trim();
    if (value) {
      this.value = value;
      const matchedRoute = this.matchRoute(value);
      // console.log(matchedRoute);
      if (matchedRoute) {
        this.router.navigateByUrl(matchedRoute);
      } else {
        this.router.navigateByUrl(value);
      }
    }
  }

  matchRoute(value: string): string {
    const routes = this.router.config;
    const words = value.split(' ');
    // words.forEach(word => {
    //   word.replace(/[^A-Za-z]/g, '');
    // });
    for (let i = 0; i < words.length; i++) {
      const cleanedWord = words[i].replace(/[^A-Za-z0-9]/g, '')
      for (let k = 0; k < routes.length; k++) {
        if ((routes[k].path).includes(cleanedWord)) {
          // console.log(`Word: ${words[i]} Route: ${routes[k].path}`);
          return routes[k].path;
        }
      }
    }
  }

  getCurrentLocation() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
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
