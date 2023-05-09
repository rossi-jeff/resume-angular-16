import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-method-form',
  templateUrl: './contact-method-form.component.html',
  styleUrls: ['./contact-method-form.component.css'],
})
export class ContactMethodFormComponent implements OnInit {
  emailTypes: string[] = ['Home', 'Work'];
  phoneTypes: string[] = [...this.emailTypes, 'Cell'];
  preferredTypes: string[] = ['Phone', 'Email'];
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
