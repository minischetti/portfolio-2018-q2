import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DirectorComponent } from './director/director.component';
import { SearchComponent } from './search/search.component';
import { VisitorNameComponent } from './visitor-name/visitor-name.component';
import { VisitorProfileService } from './visitor-profile.service';
import { ProfileComponent } from './profile/profile.component';
import { NameInputComponent } from './name-input/name-input.component';
import { DebugComponent } from './debug/debug.component';
import { ContentComponent } from './content/content.component';
import { CommandListComponent } from './command-list/command-list.component';
import { SelectedProfileComponent } from './selected-profile/selected-profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
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
  { path: 'experience', redirectTo: 'profile/dom' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    DirectorComponent,
    SearchComponent,
    VisitorNameComponent,
    ProfileComponent,
    NameInputComponent,
    DebugComponent,
    ContentComponent,
    CommandListComponent,
    SelectedProfileComponent,
    ProfilePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [VisitorProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
