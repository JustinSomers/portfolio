import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  Languages: string[] = ['C', 'C#', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Verilog', 'VDHL'];
  BestLanguages: string[] = ['C#', 'Java', 'Typescript'];
  Technologies: string[] = ['Angular', 'Git', 'Android Studio', 'Visual Studio', 'Visual Studio Code', 'Atom'];
  constructor() { }

  ngOnInit() {
  }

}
