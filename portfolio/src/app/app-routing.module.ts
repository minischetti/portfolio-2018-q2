import { NgModule } from '@angular/core';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {CommandListComponent} from './command-list/command-list.component';
import {NameInputComponent} from './name-input/name-input.component';
import {ProfileComponent} from './profile/profile.component';
import {SkillsComponent} from './skills/skills.component';
import {ContentComponent} from './content/content.component';

const routes: Routes = [
  {
    path: '',
    component: NameInputComponent,
    data: {
      title: 'Home',
      excludeFromSearch: true,
      displaySearch: false,
      displayProfile: false
    }
  },

  {
    path: 'profile/choose',
    component: ProfileComponent,
    data: {
      title: 'Choose a Profile',
      excludeFromSearch: true,
      displaySearch: false,
      displayProfile: false
    }
  },

  {
    path: 'profile/dom',
    component: ContentComponent,
    data: {
      title: 'Profile',
      friendlyName: 'Dom\'s profile',
      excludeFromSearch: false,
      displaySearch: true,
      displayProfile: true
    }
  },

  {
    path: 'profile/dom/skills',
    component: SkillsComponent,
    data: {
      title: 'Skills',
      friendlyName: 'Dom\'s skills',
      excludeFromSearch: false,
      displaySearch: true,
      displayProfile: true
    }
  },

  {
    path: 'help',
    component: CommandListComponent,
    data: {
      title: 'Help',
      friendlyName: 'the help page',
      excludeFromSearch: false,
      displaySearch: true,
      displayProfile: true
    }
  },

  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Page Not Found',
      excludeFromSearch: true,
      displaySearch: true,
      displayProfile: true
    }
  },

  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
