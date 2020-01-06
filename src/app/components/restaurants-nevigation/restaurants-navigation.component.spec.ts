import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsNavigationComponent } from './restaurants-navigation.component';

describe('RestaurantsNevigationComponent', () => {
  let component: RestaurantsNavigationComponent;
  let fixture: ComponentFixture<RestaurantsNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
