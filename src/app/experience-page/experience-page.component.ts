import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent implements OnInit {
  heading_selection:string = '';

  jobs = [
    {
      position: 'Software Engineer',
      company: 'Willis Towers Watson',
      dates: '07/2019 - Present',
      technologies: 'C#, ASP.NET, JavaScript/jQuery, SQL, HTML/CSS, Azure DevOps Server, MS SQL Server, Visual Studio, Bootstrap, DOM',
      description: `
        Following a successful internship, I was asked to return to Willis Towers Watson as a software engineer and 
        continue development on the same intranet application. In this position I engage in daily Scrum huddles and write features 
        based on specifications designed by a project manager. Version control is maintained through Azure DevOps Server.
      `
    },
    {
      position: 'React Native Developer',
      company: 'Code&Robots',
      dates: '06/2019 - Present',
      technologies: 'React Native, Jest, Storybook, Yarn',
      description: `
        I am a developer on this React Native application, which is detailed on the Projects page.
      `
    },
    {
      position: 'Full-Stack .NET Development Intern',
      company: 'Willis Towers Watson',
      dates: '05/2019 - 08/2019',
      technologies: 'C#, ASP.NET, JavaScript/jQuery, HTML/CSS, Visual Studio, Bootstrap, DOM',
      description: `
        In the summer after my second year, I began working at Willis Towers Watson as an intern
        for full-stack .NET development. I had no prior experience with .NET or web design, but was
        able to learn the necessary technologies and deliver a full CRUD feature of the company's intranet
        MVC application.
      `
    },
    {
      position: 'Engagement and Outreach Volunteer',
      company: 'UCD CS Sparks',
      dates: '08/2019 - 11/2019',
      description: `
        CS Sparks is an outreach organization aimed at engaging young women from rural Ireland in different aspects 
        of computer science and programming, attempting to offer them a look at those disciplines and helping 
        them decide if a future in computer science is right for them. I helped in the setup of the various 
        events hosted for these young women, and served as a curriculumn advisor for the semester-long roadmap.
      `
    },
  ]

  experience = [
    {
      heading: 'Languages',
      content: [
        {
          name: 'JavaScript',
          level: 'Experienced'
        },
        {
          name: 'C#',
          level: 'Experienced'
        },
        {
          name: 'Python',
          level: 'Intermediate'
        },
        {
          name: 'Java',
          level: 'Intermediate'
        },
        {
          name: 'HTML/CSS/SCSS',
          level: 'Intermediate'
        },
        {
          name: 'SQL',
          level: 'Intermediate'
        },
        {
          name: 'JSON',
          level: 'Intermediate'
        },
        {
          name: 'C',
          level: 'Familiar'
        },
        {
          name: 'Ruby',
          level: 'Familiar'
        },
        {
          name: 'XML',
          level: 'Familiar'
        }
      ]
    },
    {
      heading: 'Frameworks',
      content: [
        {
          name: 'ASP.NET',
          level: 'Experienced'
        },
        {
          name: 'Node.js',
          level: 'Intermediate'
        },
        {
          name: 'Angular',
          level: 'Intermediate'
        },
        {
          name: 'jQuery',
          level: 'Intermediate'
        },
        {
          name: 'React Native',
          level: 'Familiar'
        },
        {
          name: 'Spring Boot',
          level: 'Familiar'
        },
        {
          name: 'Maven',
          level: 'Familiar'
        }
      ]
    },
    {
      heading: 'Methodologies',
      content: [
        {
          name: 'Git',
          level: 'Experienced'
        },
        {
          name: 'REST',
          level: 'Experienced'
        },
        {
          name: 'Agile/Scrum',
          level: 'Intermediate'
        },
        {
          name: 'Azure DevOps Server',
          level: 'Intermediate'
        }
      ]
    },
    {
      heading: 'Technologies',
      content: [
        {
          name: 'IntelliJ',
          level: 'Experienced'
        },
        {
          name: 'Visual Studio',
          level: 'Experienced'
        },
        {
          name: 'Docker',
          level: 'Intermediate'
        },
        {
          name: 'Azure',
          level: 'Familiar'
        },
        {
          name: 'Firebase',
          level: 'Familiar'
        },
        {
          name: 'Amazon Web Services',
          level: 'Familiar'
        },
        {
          name: 'Jest',
          level: 'Familiar'
        },
        {
          name: 'JUnit',
          level: 'Familiar'
        },
        {
          name: 'MongoDB',
          level: 'Familiar'
        },
        {
          name: 'MS SQL Server Management Studio',
          level: 'Familiar'
        },
        {
          name: 'Tomcat',
          level: 'Familiar'
        }
      ]
    },

  ]

  constructor() { }

  ngOnInit() {
  }

  headingClicked(selection: string) {
    if (this.heading_selection === selection) {
      this.heading_selection = '';
    }
    else {
      this.heading_selection = selection;
    }
  }

}
