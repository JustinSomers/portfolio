import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { IsBootstrapWorkingComponent } from './components/is-bootstrap-working/is-bootstrap-working.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FunComponent } from './components/fun/fun.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';


@NgModule({
  declarations: [
    AppComponent,
    IsBootstrapWorkingComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    FunComponent,
    SkillsComponent,
    ProfilesComponent,
    JumbotronComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
