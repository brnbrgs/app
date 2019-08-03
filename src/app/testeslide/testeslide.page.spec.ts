import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteslidePage } from './testeslide.page';

describe('TesteslidePage', () => {
  let component: TesteslidePage;
  let fixture: ComponentFixture<TesteslidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteslidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteslidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
