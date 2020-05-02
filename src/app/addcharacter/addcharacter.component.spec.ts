import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcharacterComponent } from './addcharacter.component';

describe('AddcharacterComponent', () => {
  let component: AddcharacterComponent;
  let fixture: ComponentFixture<AddcharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
