import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatrolPage } from './patrol.page';

describe('PatrolPage', () => {
  let component: PatrolPage;
  let fixture: ComponentFixture<PatrolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
