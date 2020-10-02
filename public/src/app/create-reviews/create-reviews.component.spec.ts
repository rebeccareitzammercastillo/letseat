import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReviewsComponent } from './create-reviews.component';

describe('CreateReviewsComponent', () => {
  let component: CreateReviewsComponent;
  let fixture: ComponentFixture<CreateReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
