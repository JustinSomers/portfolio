import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  profileImg: string;

  constructor() {
    this.profileImg = '../../../assets/imgs/trumpet.jpg';
   }

  ngOnInit() {
  }

}
