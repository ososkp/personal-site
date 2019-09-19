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
      description: `
        I am deeply passionate about conservation and environmental protection, so
        to teach myself a better understanding of web development and APIs I decided 
        to look for public, environmentally-focused APIs to access and build a web site
        around. I found a relatively well-maintained API listing national parks, monuments 
        and other sites for the United States National Park Service and decided to create
        a searchable and explorable directory for those sites. This project is written in
        C#, HTML/CSS and JavaScript and is hosted on Microsoft Azure.
      `
    },
    {
      name: 'Code & Robots',
      site: 'http://www.codeandrobots.com',
      github: 'https://github.com/codeandrobots/codeandrobots-app',
      description: `
        Code & Robots is an open-source React Native project designed around offering users a 
        one-stop mobile application to control a variety of robots (inluding custom-made ones) 
        via their phone or other device. I am part of a small team the does primary development 
        of the app, working directly under the creator. So far my tasks have been to develop 
        components and screens according to Figma specifications from the creator. I have written 
        Video and CardListItem components and screens for new user Onboarding, Connecting and
        BuildRobot instructions. 
      `
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
