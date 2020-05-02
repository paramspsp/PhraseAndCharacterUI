import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphraseComponent } from './addphrase.component';

describe('AddphraseComponent', () => {
  let component: AddphraseComponent;
  let fixture: ComponentFixture<AddphraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddphraseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddphraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
