import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css'],
})
export class NameFormComponent implements OnInit {
  salutations: string[] = ['Mr', 'Mrs', 'Ms', 'Dr', 'Miss'];
  @Input() formName!: string;
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  get firstName() {
    return this.form.get('First');
  }

  get lastName() {
    return this.form.get('Last');
  }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formName) as FormGroup;
  }
}
