import { Component, OnInit } from '@angular/core';
import { IProfile } from '../../models/profile.model';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  Profiles: IProfile[];
  constructor() {
    this.Profiles = this.InitProfiles();
   }

  ngOnInit() {
  }

  InitProfiles(): IProfile[] {
    const linkedIn: IProfile = {
      profileName: 'LinkedIn',
      profileLink: 'https://www.linkedin.com/in/justin-somers-4a0364136/',
      symbol: 'fa fa-github'
    };
    const gitHub: IProfile = {
      profileName: 'GitHub',
      profileLink: 'https://github.com/JustinSomers',
      symbol: 'fa fa-linkedin'
    };
    const soundCloud: IProfile = {
      profileName: 'SoundCloud',
      profileLink: 'https://soundcloud.com/justin-somers-982191893',
      symbol: 'fa fa-soundcloud'
    };
    return [linkedIn, gitHub, soundCloud];
  }

}
