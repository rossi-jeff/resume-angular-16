import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMethodFormComponent } from './contact-method-form.component';

describe('ContactMethodFormComponent', () => {
  let component: ContactMethodFormComponent;
  let fixture: ComponentFixture<ContactMethodFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMethodFormComponent]
    });
    fixture = TestBed.createComponent(ContactMethodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
