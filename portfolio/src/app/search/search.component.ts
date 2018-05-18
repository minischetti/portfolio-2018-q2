import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { NavigationEnd, Router } from '@angular/router';
// import { THESAURUS } from '../thesaurus';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private searchService: SearchService, private router: Router) { }

  value = '';
  isSearchDisplayed: boolean;

  onEnter(value: string) {
    value = value.trim();
    if (value) {
      this.value = value;
      const matchedRoute = this.searchService.matchRoute(value);
      if (matchedRoute) {
        this.router.navigateByUrl(matchedRoute);
      } else {
        this.router.navigateByUrl(value);
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
