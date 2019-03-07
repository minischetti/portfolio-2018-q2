import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) { }

  public setTitle(title: string) {
    this.titleService.setTitle(`${title} | Dominic Minischetti's Portfolio`);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setTitle(this.activatedRoute.firstChild.routeConfig.data.title);
      }
    });
  }
}
