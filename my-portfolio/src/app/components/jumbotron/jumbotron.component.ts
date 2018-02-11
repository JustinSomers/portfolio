import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  profileImg: string;
  constructor() {
    this.profileImg = '../../../assets/imgs/trumpetSquare.jpg';
  }

  ngOnInit() {
  }

}
