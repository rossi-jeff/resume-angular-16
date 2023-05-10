import { Component, Input, OnInit } from '@angular/core';
import { Reference } from '../../types/reference.type';
import { FormatName } from '../../lib/format-name';

@Component({
  selector: 'app-reference-card',
  templateUrl: './reference-card.component.html',
  styleUrls: ['./reference-card.component.css'],
})
export class ReferenceCardComponent implements OnInit {
  @Input()
  reference!: Reference;
  name: string = '';
  phone: string = '';
  email: string = '';

  toggleContact = () => {
    const el = document.getElementById(`contact-${this.reference.Id}`);
    if (el) el.style.display = el.style.display == 'block' ? 'none' : 'block';
  };

  toggleComment = () => {
    const el = document.getElementById(`comments-${this.reference.Id}`);
    if (el) el.style.display = el.style.display == 'block' ? 'none' : 'block';
  };

  ngOnInit(): void {
    this.name = this.reference.Name ? FormatName(this.reference.Name) : '';
    this.phone =
      this.reference.Phones && this.reference.Phones.length > 0
        ? this.reference.Phones.map((p) => p.Number).join(', ')
        : '';
    this.email =
      this.reference.Emails && this.reference.Emails.length > 0
        ? this.reference.Emails.map((e) => e.Address).join(', ')
        : '';
  }
}
