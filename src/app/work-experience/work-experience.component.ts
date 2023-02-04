import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  workExperiences = [
    {
      fromDate:"September-2022",
      toDate:"Present",
      companyName:"TechTree IT Systems Pvt. Ltd",
      jobRole:"Associate UI Developer - Angular",
      jobDescription:"UI Developer with experience in designing and implementing user-friendly interfaces for web applications. Proficient in Angular framework and skilled in HTML, CSS, and JavaScript."
    },
    {
      fromDate:"April-2022",
      toDate:"September-2022",
      companyName:"TechTree IT Systems Pvt. Ltd",
      jobRole:"Intern UI Developer - Angular",
      jobDescription:"Intern UI Developer with experience in designing and developing user-friendly interfaces for web applications. Proficient in Angular framework and familiar with HTML, CSS, and JavaScript."
    },
    {
      fromDate:"August 2021",
      toDate:"September 2021",
      companyName:"Take it Smart (OPC) Pvt. Ltd",
      jobRole:"Student Intern",
      jobDescription:"Worked on Ball Tracking system and Edge detection system by applying machine learning using Python. This internship was lasted for the duration of 1 month."
    }
  ]
}
