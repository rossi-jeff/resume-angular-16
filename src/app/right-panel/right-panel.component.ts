import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css'],
})
export class RightPanelComponent {
  @Output() toggleMenu: EventEmitter<any> = new EventEmitter();

  menuToggleClicked = () => {
    this.toggleMenu.emit();
  };
}
