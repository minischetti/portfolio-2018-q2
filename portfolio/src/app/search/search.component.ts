import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import {trigger, state, transition, style, animate, keyframes, stagger, query} from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('helperAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(50%)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter, :leave', animate('1s ease-in-out'))
    ]),
    trigger('animation', [
      transition('* => stuck', [
        animate('1s ease-in-out', keyframes([
          style({boxShadow: '0 0 0 0 rgba(255,0,0,.25)'}),
          style({boxShadow: '0 0 0 20px transparent'})
        ]))
      ]),
    ])],
})
export class SearchComponent implements OnInit {
  constructor(private searchService: SearchService, private router: Router, private activatedRoute: ActivatedRoute) { }

  value = '';
  currentRoute: ActivatedRoute;
  isSearchDisplayed: boolean;
  state: string;
  helperText: string;

  onEnter(element: HTMLInputElement) {
    const value = element.value.trim();
    if (value) {
      this.value = value;
      const matchedRoute = this.searchService.matchRoute(value);
      if (matchedRoute === this.getCurrentLocation()) {
        this.state = 'stuck';
        this.setHelperText();
      } else if (matchedRoute) {
        this.state = 'success';
        this.router.navigateByUrl(matchedRoute);
        element.blur();
      } else {
        this.state = 'error';
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

  setHelperText(): void {
    this.helperText = this.currentRoute.routeConfig.data.friendlyName;
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
