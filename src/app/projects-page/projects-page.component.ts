import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  projects = [
    {
      name: 'National Park Service Directory',
      site: 'https://parksservice.azurewebsites.net',
      github: 'https://github.com/OsosKP/NPS',
      technologies: 'C#, ASP.NET, HTML/CSS, JavaScript/jQuery, Bootstrap, Azure',
      description: `
        I am deeply passionate about conservation and environmental protection, so
        to teach myself a better understanding of web development and APIs I decided 
        to look for public, environmentally-focused APIs to access and build a web site
        around. I found a relatively well-maintained API listing national parks, monuments 
        and other sites for the United States National Park Service and decided to create
        a searchable and explorable directory for those sites. 
        This project is hosted on Microsoft Azure.
      `
    },
    {
      name: 'Code & Robots',
      site: 'http://www.codeandrobots.com',
      github: 'https://github.com/codeandrobots/codeandrobots-app',
      technologies: 'React Native, Jest, Storybook, Yarn',
      description: `
        Code & Robots is an open-source React Native project designed around offering users a 
        one-stop mobile application to control a variety of robots (inluding custom-made ones) 
        via their phone or other device. I am part of a small team the does primary development 
        of the app, working directly under the creator. So far my tasks have been to develop 
        components and screens according to Figma specifications from the creator. I have written 
        Video and CardListItem components and screens for new user Onboarding, Connecting and
        BuildRobot instructions. 
      `
    },
    {
      name: 'FreshSmell',
      github: 'https://github.com/OsosKP/FreshSmell',
      technologies: 'Java, Spring Boot, Tomcat, JSP, HTML/SCSS',
      description: `
        In the third year of my degree, we were given a project to 'Design a code-smelling
        application in Java.' I had experience with .NET and wanted to learn how to build a 
        web application in Java, so I as the group leader decided to go further with the 
        project and make it a Spring Boot project. I wrote the documentation and all of 
        the architectural code, structuring it as an MVC application with a repository pattern 
        to access uploaded .java files. I provided a sort of interface for my group mates so 
        they could stay in the service layer and just write to align with my predetermined structure. 
        Along with the coding I did, I managed GitHub issue tracking and version control and defined
        design documents from which my group could work. We developed a minimal front-end, as we
        were more concerned with what we wanted to get out of the project - a deeper understand
        of the Spring Boot framework and how to deploy a Java web app.
      `
    },
    {
      name: 'Integrating Sabermetrics and Machine Learning',
      technologies: 'Python',
      description: `
        This is my upcoming final year project and is currently in the research stage. I will attempt 
        to use Python and a neural network framework to reimagine baseball statistics and find a better 
        way to evaluate players and predict wins.
      `
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
