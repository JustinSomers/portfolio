import { Component, OnInit, NgModule, Renderer2 } from '@angular/core';
import { IProject } from '../../models/project.model';

@Component({
  selector: 'app-cpre394',
  templateUrl: './cpre394.component.html',
  styleUrls: ['./cpre394.component.scss']
})

export class Cpre394Component implements OnInit {
  projectOne: IProject;
  projectTwo: IProject;
  constructor(private renderer: Renderer2) {
    const color: String = '#1b2021';
    this.renderer.setStyle(document.body, 'background-color', color);
   }

  ngOnInit() {
    this.projectOne = {
      Title: 'Personal Portfolio Website',
      Subtitle: 'Constructed with Angular & ASP.NET Core',
      AboutProject: `The purpose of  this project was to create a working portfolio website to send to employers, along with
        hosting a blog to write on.  I hope to create everything from scratch, utilizing the front-end javascript framework, Angular,
        and the backend framework, Asp.net Core.  I chose to utilize these two frameworks as it allows me to completely customize
        the website to do exactly what I would like.  It allows allows me to work on my design skills and add some additional
        functionality to the website so it is not just a static website.`,
      WhatILearned: `
        I learned how to utilize the Angular framework, and also how to construct a website from the ground up.  I also learned how
        to write server code using C# and the Asp.net core framework.  Using Asp.net, I will be able to create an API to retrieve blog
        articles that I have written before from a database.  That way website visiters will be able to sort the articles written by
        most recent, date, and more.`,
        Images: []
    } as IProject;

    this.projectTwo = {
      Title: 'Stereo Headphone Amplifier',
      Subtitle: 'Created for use in EE 230',
      AboutProject: `
        The purpose of this project was to construct a two channel headphone amplifier.  The headphone amp was required
        to work throughout the range of audible frequencies for the human ear (20 Hz to 20,000 Hz).  The headphone amplifier
        also needed to have two seperate volume controls, one for the left ear, and one for the right ear.
        My lab partner, Nathan Nordling, and I, successfully completed the project by utilizing two op-amps, capacitors, and resistors.`,
      WhatILearned: `
      Before the project, my lab partner and I were fairly inexperienced with op-amp usage.  We had to redesign the circuit for
      our design multiple times. We learned that op-amps do not function ideally, meaning as a circuit designer, we may need
      to utilize multiple op-amps to properly amplify our signal, due to the gain-bandwidth limitations for each circuit.
      `,
      Images: [ '/assets/imgs/bandwitdth.PNG', '/assets/imgs/circuit diagram.png',
          '/assets/imgs/circuitImplementation.JPG']
    } as IProject;
  }

}
