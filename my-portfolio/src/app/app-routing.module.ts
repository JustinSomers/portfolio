import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FunComponent } from './components/fun/fun.component';
import { BlogComponent } from './components/blog/blog.component';
import { Cpre394Component } from './components/cpre394/cpre394.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'projects', component: Cpre394Component},
  { path: 'fun', component: FunComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
