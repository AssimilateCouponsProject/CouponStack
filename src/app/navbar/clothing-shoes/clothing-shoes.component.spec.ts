import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingShoesComponent } from './clothing-shoes.component';

describe('ClothingShoesComponent', () => {
  let component: ClothingShoesComponent;
  let fixture: ComponentFixture<ClothingShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
