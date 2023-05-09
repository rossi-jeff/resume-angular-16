import { Component, Input } from '@angular/core';
import { School } from '../../types/school.type';

@Component({
  selector: 'app-school-card',
  templateUrl: './school-card.component.html',
  styleUrls: ['./school-card.component.css'],
})
export class SchoolCardComponent {
  @Input()
  school!: School;
}
