import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefRestaurantsBoxComponent } from './chef-restaurants-box.component';

describe('ChefRestaurantsBoxComponent', () => {
  let component: ChefRestaurantsBoxComponent;
  let fixture: ComponentFixture<ChefRestaurantsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefRestaurantsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefRestaurantsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
