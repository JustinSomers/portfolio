import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profileImg: string;
  constructor() {
    this.profileImg = '../../../assets/imgs/trumpetSquare.jpg';
  }

  ngOnInit() {
  }

}
