import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GraphqlService } from '../graphql.service';
import { CREATE_CONTACT_MUTATION } from '../../graphql/mutations/create-contact';
import { RemoveBlanks } from '../../lib/remove-blanks';
import { FormatName } from '../../lib/format-name';
import { FullName } from '../../types/full-name.type';
import { blankContact } from '../../types/contact.type';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  sent: boolean = false;
  name: string = '';

  constructor(private fb: FormBuilder, private graphql: GraphqlService) {}

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

  sendMessage = () => {
    const fullName: FullName = this.contactForm.value.Name || blankContact.Name;
    this.name = FormatName(fullName);
    this.graphql
      .mutation({
        mutation: CREATE_CONTACT_MUTATION,
        variables: RemoveBlanks(this.contactForm.value),
      })
      .subscribe(() => (this.sent = true));
  };

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      Name: this.fb.group({
        Salutation: [''],
        First: this.fb.control('', [Validators.required]),
        Middle: [''],
        Last: this.fb.control('', [Validators.required]),
        Suffix: [''],
      }),
      Address: this.fb.group({
        Address: [''],
        Suite: [''],
        City: [''],
        State: [''],
        Zip: [''],
      }),
      Email: this.fb.control('', [Validators.required, Validators.email]),
      EmailType: [''],
      Phone: [''],
      PhoneType: [''],
      Preferred: [''],
      Subject: this.fb.control('', [Validators.required]),
      Message: this.fb.control('', [Validators.required]),
    });
    this.toggle('name');
  }
}
