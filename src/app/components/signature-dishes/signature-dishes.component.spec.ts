import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureDishesComponent } from './signature-dishes.component';

describe('SignatureDishesComponent', () => {
  let component: SignatureDishesComponent;
  let fixture: ComponentFixture<SignatureDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
