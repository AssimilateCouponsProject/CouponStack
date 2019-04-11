import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyGroomingComponent } from './beauty-grooming.component';

describe('BeautyGroomingComponent', () => {
  let component: BeautyGroomingComponent;
  let fixture: ComponentFixture<BeautyGroomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautyGroomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyGroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
