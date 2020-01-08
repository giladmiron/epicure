import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularRestaurantBoxComponent } from './popular-restaurant-box.component';

describe('PopularRestaurantBoxComponent', () => {
  let component: PopularRestaurantBoxComponent;
  let fixture: ComponentFixture<PopularRestaurantBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularRestaurantBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularRestaurantBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
