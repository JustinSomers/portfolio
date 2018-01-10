import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { IsBootstrapWorkingComponent } from './is-bootstrap-working/is-bootstrap-working.component';


@NgModule({
  declarations: [
    AppComponent,
    IsBootstrapWorkingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
