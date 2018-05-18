import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

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
import { AppRoutingModule } from './/app-routing.module';
import { SearchService } from './search.service';
import { ThesaurusService } from './thesaurus.service';

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
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [VisitorProfileService, SearchService, ThesaurusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
