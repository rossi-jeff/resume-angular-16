import { Component, Input, OnInit } from '@angular/core';
import { School } from '../../types/school.type';
import { FormatAddress } from '../../lib/format-address';

@Component({
  selector: 'app-school-card',
  templateUrl: './school-card.component.html',
  styleUrls: ['./school-card.component.css'],
})
export class SchoolCardComponent implements OnInit {
  @Input()
  school!: School;
  address: string = '';

  ngOnInit(): void {
    this.address = this.school.Address
      ? FormatAddress(this.school.Address)
      : '';
  }
}
