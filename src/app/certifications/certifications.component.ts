import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  // buttonsArray: any;

  constructor() { }

  ngOnInit(): void {
  
  }
  certificates = [ 
    {
      courseNameMain:"Google X Coursera",
      date:"December 2021",
      courseName:"Google IT Automation using Python",
      courseDesc:"Currently enrolled in this course which provides me a great exposure on working with python as per industry standards. As of now, I have completed Course 1 of 6 (Crash course on python).",
      buttonName:"Certificate - Crash Course on Python (course 1 of 6)",
      status:"enabled",
      buttonLink:"https://coursera.org/share/0301dbf7c250206f7c98f19dab39e407"
    },
    {
      courseNameMain:"Freecodecamp",
      date:"January 2022",
      courseName:"JavaScript Algorithm and Data Structures",
      courseDesc:"As a part of this certification, I have built palindrome checker, Roman numeral Converter, Caesars Cipher, Telephone number validator and Cash Register projects using Javascript.",
      buttonName:"Certificate",
      status:"enabled",
      buttonLink:"https://freecodecamp.org/certification/nayakdarshan22/javascript-algorithms-and-data-structures"
    },
    {
      courseNameMain:"Freecodecamp",
      date:"January 2022",
      courseName:"Responsive Web Design",
      courseDesc:"As a part of this certification, I have built a Survey form, a Tribute page, a Technical Documentation Page, a Product landing Page and this personal portfolio webpage using HTML5, CSS3 and JavaScript.",
      buttonName:"Certificate",
      status:"enabled",
      buttonLink:"https://freecodecamp.org/certification/nayakdarshan22/responsive-web-design"
    },
    {
      courseNameMain:"Take it Smart",
      date:"September 2021",
      courseName:"Machine Learning using Python",
      courseDesc:"Worked on Ball Tracking system and Edge detection system by applying machine learning using Python. This internship was lasted for the duration of 1 month.",
      buttonName:"Certificate",
      status:"enabled",
      buttonLink:"https://drive.google.com/file/d/1GnVzgOKOwF0-TnC6YwQua_2NSMMS4P6k/view?usp=sharing"
    },
    {
      courseNameMain:"udemy",
      date:"August 2021",
      courseName:"Basic HTML,CSS and Javascript",
      courseDesc:"Worked on Building basic webpages using HTML, CSS and JavaScript and also worked on responsive webpages.",
      buttonName:"Certificate",
      status:"enabled",
      buttonLink:"https://www.udemy.com/certificate/UC-d1cce076-0417-4304-b0f2-45d51bc2a678/"
    },
    {
      courseNameMain:"HackerRank",
      date:"September 2020",
      courseName:"Programming in C",
      courseDesc:"Under these courses, I have worked on basic, intermediate and advanced concepts of C",
      buttonName:"Certficate",
      status:"enabled",
      buttonLink:"https://www.hackerrank.com/certificates/3d0560ba0fb8"
    },
    {
      courseNameMain:"HackerRank",
      date:"September 2020",
      courseName:"Programming in C++",
      courseDesc:"Under these courses, I have worked on basic, intermediate and advanced concepts of C++",
      buttonName:"Certficate",
      status:"enabled",
      buttonLink:"https://www.hackerrank.com/certificates/d980a79dc3d5"
    },
    {
      courseNameMain:"HackerRank",
      date:"September 2020",
      courseName:"Programming in Java",
      courseDesc:"Under these courses, I have worked on basic, intermediate and advanced concepts of Java",
      buttonName:"Certficate",
      status:"enabled",
      buttonLink:"https://www.hackerrank.com/certificates/6009ab9a0d8a"
    },
  ]

}
