import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditphraseComponent } from './editphrase.component';

describe('EditphraseComponent', () => {
  let component: EditphraseComponent;
  let fixture: ComponentFixture<EditphraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditphraseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditphraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
