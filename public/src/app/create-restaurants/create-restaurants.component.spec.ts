import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRestaurantsComponent } from './create-restaurants.component';

describe('CreateRestaurantsComponent', () => {
  let component: CreateRestaurantsComponent;
  let fixture: ComponentFixture<CreateRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
