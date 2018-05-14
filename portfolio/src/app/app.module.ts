import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectorComponent } from './director/director.component';
import { SearchComponent } from './search/search.component';
import { VisitorNameComponent } from './visitor-name/visitor-name.component';
import { VisitorProfileService } from './visitor-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    DirectorComponent,
    SearchComponent,
    VisitorNameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [VisitorProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
