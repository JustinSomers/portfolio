import { Component, OnInit, Renderer2 } from '@angular/core';
import { IJob } from '../../models/job.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  jobOne: IJob;
  jobTwo: IJob;
  jobThree: IJob;
  jobOneSkills: String[];
  jobOneDescription: String[];
  jobTwoSkills: String[];
  jobTwoDescription: String[];
  jobThreeSkills: String[];
  jobThreeDescription: String[];
  constructor(private renderer: Renderer2) {
    const color: String = '#1b2021';
    this.renderer.setStyle(document.body, 'background-color', color);
   }

  ngOnInit() {
    this.jobOne = {
      jobName: 'IBM Systems Computer Engineering Intern',
      jobDescription: ['Full-stack development with React, NodeJS, MongoDB ',
    'Create systems-in-test server monitoring tool with React, NodeJS, & MongoDB ',
    'Automate server status and performance monitoring processes via Python script',
    'Analyze & perform hardware tests on 50+ IBM Power9 Systems '],
    jobSkills: ['Python', 'javascript', 'Node', 'React', 'mongoDB', 'Linux',
     'International Collaboration', 'Perl', 'Build automation'],
     jobDescriptionParagraph: `The summer of 2018, I interned for IBM with the Systems Test department.
      There I worked on a build automation tool to help deploy code changes to many servers located across the globe.
      This tool was initially developed with React for the front-end, an expressJS back-end server, and numerous python processes
      to gather and deploy the information.`
    } as IJob;
    this.jobOneSkills = ['Python', 'javascript', 'Node', 'React', 'mongoDB', 'Linux',
    'International Collaboration', 'Perl', 'Build automation'];
    this.jobOneDescription = this.jobOne.jobDescription;



    this.jobTwo = {
      jobName: 'Thinix Software Engineer Intern ',
      jobDescription: ['Increase code coverage and stability with unit, integration, and end-to-end testing',
        'Update and optimize previous AngularJS codebase to Angular4',
        'Implement new components with Test-Driven Development'
      ],
      jobSkills: ['Angular', 'ASP.NET', 'Test-Driven development', 'Jest', 'Agile Practices'],
      jobDescriptionParagraph: `I interned for Thinix from Fall 2017 - Spring 2018 during the school year.
      This job allowed me to dive into front-end frameworks which I had not worked with before.  I spent the majority
      of my time working with Angular writing test-cases for the large code-base, and later implementing new components
      and bug fixes.  Here I also began to understand agile practices more, such as SCRUM meetings, team planning, and more.`
    } as IJob;
    this.jobTwoSkills = this.jobTwo.jobSkills;
    this.jobTwoDescription = this.jobTwo.jobDescription;

    this.jobThree = {
      jobName: 'Eagle Technology Management Software Engineer Intern',
      jobSkills: ['HTML', 'Javscript', 'SQL', 'Asp.NET', 'Typescript', 'Boothstrap'],
      jobDescription: ['Full-Stack Development with ASP.NET, SQL, JavaScript, Typescript, jQuery, and Bootstrap',
        'Research and develop ways to improve current company software',
        'Pioneer development for new, state-of-the-art prototype for company product',
        'Rapidly pick up and grasp new technologies required for company’s advancement'],
        jobDescriptionParagraph: `This was my first internship I had, where I worked on a PDF conversion tool
        to help users create PDF's that displayed the information they wanted from the company's larger program, UP.
        I used basic HTML and javascript to accomplish this, as I had not learned how to utilize front-end frameworks such as
        Angular, or React.  The application I build was interactive, so it could have utilized these, but this internship
        provided me the opportunity to really dig into how HTML and javascript work, which was a huge benefit later down the road.
      `
    } as IJob;

    this.jobThreeSkills = this.jobThree.jobSkills;
    this.jobThreeDescription = this.jobThree.jobDescription;
  }

}
