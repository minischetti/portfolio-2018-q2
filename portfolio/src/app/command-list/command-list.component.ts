import { Component, OnInit } from '@angular/core';
import { COMMANDS } from '../commands';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css'],
  animations: [
    trigger('animation', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], {optional: true}),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class CommandListComponent implements OnInit {

  commands = COMMANDS;

  constructor(private router: Router) { }

  ngOnInit() { }

  goToRoute(route: string) {
    this.router.navigateByUrl(route);
  }

}
