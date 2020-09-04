import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendHotelComponent } from './recommend-hotel.component';

describe('RecommendHotelComponent', () => {
  let component: RecommendHotelComponent;
  let fixture: ComponentFixture<RecommendHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
