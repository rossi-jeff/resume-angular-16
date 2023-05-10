import { Component, Input } from '@angular/core';
import { Link } from '../../types/link.type';

@Component({
  selector: 'app-link-row',
  templateUrl: './link-row.component.html',
  styleUrls: ['./link-row.component.css'],
})
export class LinkRowComponent {
  @Input()
  link!: Link;
}
