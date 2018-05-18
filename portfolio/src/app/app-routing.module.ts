import { NgModule } from '@angular/core';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {CommandListComponent} from './command-list/command-list.component';
import {NameInputComponent} from './name-input/name-input.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  // Home
  { path: '', component: NameInputComponent, data: { excludeFromSearch: true } },

  // Profile
  { path: 'profile/choose', component: ProfileComponent, data: { excludeFromSearch: true } },
  { path: 'profile/dom', component: ProfilePageComponent, data: { excludeFromSearch: false } },

  // Help
  { path: 'help', component: CommandListComponent, data: { excludeFromSearch: false } },

  // Error
  { path: 'not-found', component: NotFoundComponent, data: { excludeFromSearch: true } },

  // Redirects
  { path: 'profile', redirectTo: 'profile/dom', data: { excludeFromSearch: true } },
  { path: 'experience', redirectTo: 'profile/dom', data: { excludeFromSearch: true } },
  { path: '**', redirectTo: 'not-found', data: { excludeFromSearch: true } }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
