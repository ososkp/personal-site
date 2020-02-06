import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  details = [
    {
      label: 'Email',
      value: 'ososkp@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/kelseyosos/',
    },
    {
      label: 'GitHub',
      value: 'https://github.com/OsosKP',
    },
    {
      label: 'Phone, WhatsApp',
      value: '+353 83 863 6727',
    },
    {
      label: 'Skype',
      value: 'ososkp@gmail.com'
    },
    {
      label: 'Google Hangouts',
      value: 'kelsey.osos@ucdconnect.ie',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
