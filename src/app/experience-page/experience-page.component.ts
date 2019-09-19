import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent implements OnInit {
  experience = [
    {
      position: "Software Engineer",
      company: "Willis Towers Watson",
      dates: "07/2019 - Present",
      technologies: "C#, ASP.NET, JavaScript/jQuery, SQL, HTML/CSS, Azure DevOps Server, MS SQL Server, Visual Studio, Bootstrap, DOM",
      description: `
        Following a successful internship, I was asked to return to Willis Towers Watson as a software engineer and 
        develop on the same intranet application. In this position I engage in daily Scrum huddles and develop features 
        based on specifications designed by a project manager. Version control is maintained through Azure DevOps Server.
      `
    },
    {
      position: "React Native Developer",
      company: "Code&Robots",
      dates: "06/2019 - Present",
      technologies: "React Native, Jest, Storybook, Yarn",
      description: `
        I am a developer on this React Native application, which is detailed on the Projects page.
      `
    },
    {
      position: "Full-Stack .NET Development Intern",
      company: "Willis Towers Watson",
      dates: "05/2019 - 08/2019",
      technologies: "C#, ASP.NET, JavaScript/jQuery, HTML/CSS, Visual Studio, Bootstrap, DOM",
      description: `
        In the summer after my second year, I began working at Willis Towers Watson as an intern
        for full-stack .NET development. I had no prior experience with .NET or web design, but was
        able to learn the necessary technologies and deliver a full CRUD feature of the company's intranet
        MVC application.
      `
    },
    {
      position: "Engagement and Outreach Volunteer",
      company: "UCD CS Sparks",
      dates: "08/2019 - 11/2019",
      technologies: "Scratch",
      description: `
        CS Sparks is an outreach organization aimed at engaging young women from rural Ireland in different aspects 
        of computer science and programming, attempting to offer them a look at those disciplines and helping 
        them decide if a future in computer science is right for them. I helped in the setup of the various 
        events hosted for these young women, and served as a curriculumn advisor for the semester-long roadmap.
      `
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
