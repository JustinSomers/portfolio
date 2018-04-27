import { BlogServiceService } from './services/blog-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FunComponent } from './components/fun/fun.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogArticleComponent } from './components/blog/blog-article/blog-article.component';
import { Cpre394Component } from './components/cpre394/cpre394.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    FunComponent,
    SkillsComponent,
    ProfilesComponent,
    JumbotronComponent,
    BlogComponent,
    BlogArticleComponent,
    Cpre394Component,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ BlogServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
