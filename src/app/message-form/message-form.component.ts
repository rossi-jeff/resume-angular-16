import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css'],
})
export class MessageFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  get subject() {
    return this.form.get('Subject');
  }

  get message() {
    return this.form.get('Message');
  }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
