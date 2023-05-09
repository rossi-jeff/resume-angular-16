import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  toggle = (target: string) => {
    const names = ['name', 'address', 'contact-method', 'message'];
    let el, btn;
    for (const name of names) {
      el = document.getElementById(`${name}-accordion-content`);
      btn = document.getElementById(`${name}-button`);
      if (name == target) {
        if (btn) {
          if (el && el.style.display == 'none') {
            btn.classList.add('open');
          } else {
            btn.classList.remove('open');
          }
        }
        if (el)
          el.style.display = el.style.display == 'block' ? 'none' : 'block';
      } else {
        if (el) el.style.display = 'none';
        if (btn) btn.classList.remove('open');
      }
    }
  };

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      Name: this.fb.group({
        Salutation: [],
        First: [],
        Middle: [],
        Last: [],
        Suffix: [],
      }),
      Address: this.fb.group({
        Address: [],
        Suite: [],
        City: [],
        State: [],
        Zip: [],
      }),
      Email: [],
      EmailType: [],
      Phone: [],
      PhoneType: [],
      Preferred: [],
      Subject: [],
      Message: [],
    });
    this.toggle('name');
  }
}
