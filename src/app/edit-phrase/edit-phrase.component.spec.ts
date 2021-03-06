import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhraseComponent } from './edit-phrase.component';

describe('EditPhraseComponent', () => {
  let component: EditPhraseComponent;
  let fixture: ComponentFixture<EditPhraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPhraseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
