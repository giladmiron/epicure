import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishPopupComponent } from './dish-popup.component';

describe('DishPopupComponent', () => {
  let component: DishPopupComponent;
  let fixture: ComponentFixture<DishPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
