import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private searchService: SearchService, private router: Router, private activatedRoute: ActivatedRoute) { }

  value = '';
  currentRoute: ActivatedRoute;
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

  getCurrentLocation(): string {
    return this.currentRoute.routeConfig.path;
  }

  displaySearch(): void {
    this.isSearchDisplayed = this.currentRoute.routeConfig.data.displaySearch;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.activatedRoute.firstChild;
        this.getCurrentLocation();
        this.displaySearch();
      }
    });
  }
}
