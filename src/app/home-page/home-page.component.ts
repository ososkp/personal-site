import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public profilePictureUrl = 'https://avatars0.githubusercontent.com/u/25949118?s=400&u=1ab22b05113f6ab8cfeabfffc0f4409e6dc04b63&v=4';

  constructor() { }

  ngOnInit() {
  }

}
