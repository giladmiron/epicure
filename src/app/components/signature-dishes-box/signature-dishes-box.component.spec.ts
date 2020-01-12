import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureDishesBoxComponent } from './signature-dishes-box.component';

describe('SignatureDishesBoxComponent', () => {
  let component: SignatureDishesBoxComponent;
  let fixture: ComponentFixture<SignatureDishesBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureDishesBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureDishesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
