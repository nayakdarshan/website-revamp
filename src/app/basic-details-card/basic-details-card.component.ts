import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-details-card',
  templateUrl: './basic-details-card.component.html',
  styleUrls: ['./basic-details-card.component.scss']
})
export class BasicDetailsCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
public basicDetails = {
  name:"Darshan Nayak",
  profileSummary:"Computer Science Engineer with experience as an Angular Developer. Skilled in developing dynamic and interactive web applications using Angular framework. Strong understanding of JavaScript, HTML, and CSS. Proficient in integrating applications with REST APIs and database systems. Experienced in Agile software development methodologies and capable of working independently as well as part of a team. Passionate about using technology to solve complex problems and deliver high-quality software solutions.",
  age:"24",
  hometown:"Sirsi, KA",
  country:"India",
  languages:"English, Hindi, Kannada, Konkani, Tulu",
  hobbies:"Programming, Moto-riding, Movies/Web Series"
}

}
