import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-skills',
  templateUrl: './personal-skills.component.html',
  styleUrls: ['./personal-skills.component.scss']
})
export class PersonalSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  personalSkills = [
    {
      icon:"fa-html5",
      mainSkill:"Angular 10+",
      progressPercentage:"70%"
    },
    {
      icon:"fa-html5",
      mainSkill:"HTML 5",
      progressPercentage:"70%"
    },
    {
      icon:"fa-css3",
      mainSkill:"CSS 3",
      progressPercentage:"65%"
    },
    {
      icon:"fa-bootstrap",
      mainSkill:"Bootstrap 5",
      progressPercentage:"70%"
    },
      {
      icon:"fa-sass",
      mainSkill:"SASS",
      progressPercentage:"60%"
    },
    {
      icon:"fa-js-square",
      mainSkill:"JavaScript",
      progressPercentage:"60%"
    },
    {
      icon:"fa-html5",
      mainSkill:"Typescript",
      progressPercentage:"50%"
    },
    {
      icon:"fa-html5",
      mainSkill:"Python",
      progressPercentage:"50%"
    },
    {
      icon:"fa-html5",
      mainSkill:"C/C++",
      progressPercentage:"75%"
    },
    {
      icon:"fa-html5",
      mainSkill:"MySql",
      progressPercentage:"50%"
    },
  ]
}
