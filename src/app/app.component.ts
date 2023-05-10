import { Component, OnInit } from '@angular/core';
import { themeNames } from '../lib/themes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Jeff Rossi | Software Developer';

  setTheme = (name: string) => {
    const main = document.getElementById('main');
    if (main) main.setAttribute('data-theme', name);
  };

  themeChanged = (name: string) => {
    this.setTheme(name);
  };

  ngOnInit(): void {
    this.setTheme(themeNames[0]);
  }
}
