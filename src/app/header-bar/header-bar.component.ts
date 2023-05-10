import { Component, EventEmitter, Output } from '@angular/core';
import { themeNames } from '../../lib/themes';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'],
})
export class HeaderBarComponent {
  names: string[] = themeNames;
  @Output() themeChange: EventEmitter<string> = new EventEmitter();

  themeSelectChanged = (ev: any) => {
    const name = themeNames[ev.target.selectedIndex];
    this.themeChange.emit(name);
  };
}
