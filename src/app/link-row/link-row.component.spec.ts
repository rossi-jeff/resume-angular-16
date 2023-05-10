import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkRowComponent } from './link-row.component';

describe('LinkRowComponent', () => {
  let component: LinkRowComponent;
  let fixture: ComponentFixture<LinkRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkRowComponent]
    });
    fixture = TestBed.createComponent(LinkRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
