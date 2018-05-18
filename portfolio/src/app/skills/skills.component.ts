import { Component, OnInit } from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
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
export class SkillsComponent implements OnInit {

  skills: Array<string> = [
    'CSS3',
    'SASS',
    'HTML5',
    'Freemarker',
    'JavaScript (ES6)',
    'Angular',
    'React',
    'TypeScript',
    'Webpack',
    'Java',
    'Automation Testing',
    'JIRA',
    'Fisheye + Crucible',
    'Adobe Photoshop',
    'Sketch',
    'Agile'
  ]
  constructor() { }

  ngOnInit() {
  }

}
