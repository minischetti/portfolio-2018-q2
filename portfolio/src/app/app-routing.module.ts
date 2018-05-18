import { NgModule } from '@angular/core';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {CommandListComponent} from './command-list/command-list.component';
import {NameInputComponent} from './name-input/name-input.component';
import {ProfileComponent} from './profile/profile.component';
import {SkillsComponent} from './skills/skills.component';

const routes: Routes = [
  { path: '', component: NameInputComponent, data: { excludeFromSearch: true, displaySearch: false, displayProfile: false } },

  { path: 'profile/choose', component: ProfileComponent, data: { excludeFromSearch: true, displaySearch: false, displayProfile: false } },

  { path: 'profile/dom', component: ProfilePageComponent, data: { excludeFromSearch: false, displaySearch: true, displayProfile: true } },

  { path: 'profile/dom/skills', component: SkillsComponent, data: { excludeFromSearch: false, displaySearch: true, displayProfile: true } },

  { path: 'help', component: CommandListComponent, data: { excludeFromSearch: false, displaySearch: true, displayProfile: true } },

  { path: 'not-found', component: NotFoundComponent, data: { excludeFromSearch: true, displaySearch: true, displayProfile: false } },

  { path: '**', redirectTo: 'not-found', data: { excludeFromSearch: true, displaySearch: true, displayProfile: false } }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
