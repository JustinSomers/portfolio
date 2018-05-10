import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  public isCollapsed: Boolean;
  
  constructor() { }

  ngOnInit() {
    this.isCollapsed = true;

  }

}
