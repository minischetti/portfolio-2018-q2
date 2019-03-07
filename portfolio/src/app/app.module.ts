import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectorComponent } from './director/director.component';
import { SearchComponent } from './search/search.component';
import { VisitorProfileService } from './visitor-profile.service';
import { ProfileComponent } from './profile/profile.component';
import { NameInputComponent } from './name-input/name-input.component';
import { ContentComponent } from './content/content.component';
import { CommandListComponent } from './command-list/command-list.component';
import { SelectedProfileComponent } from './selected-profile/selected-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchService } from './search.service';
import { SkillsComponent } from './skills/skills.component';
import { Title } from '@angular/platform-browser';
import { StringReplacePipe } from './string-replace.pipe';
import {CommandsService} from './commands.service';

@NgModule({
  declarations: [
    AppComponent,
    DirectorComponent,
    SearchComponent,
    ProfileComponent,
    NameInputComponent,
    ContentComponent,
    CommandListComponent,
    SelectedProfileComponent,
    NotFoundComponent,
    SkillsComponent,
    StringReplacePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    VisitorProfileService,
    SearchService,
    CommandsService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
