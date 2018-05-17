import { NgModule } from '@angular/core';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {CommandListComponent} from './command-list/command-list.component';
import {NameInputComponent} from './name-input/name-input.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  // Home
  { path: '', component: NameInputComponent },

  // Profile
  { path: 'profile/choose', component: ProfileComponent },
  { path: 'profile/dom', component: ProfilePageComponent },

  // Help
  { path: 'help', component: CommandListComponent },

  // Error
  { path: 'not-found', component: NotFoundComponent },

  // Redirects
  { path: 'profile', redirectTo: 'profile/dom' },
  { path: 'experience', redirectTo: 'profile/dom' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
