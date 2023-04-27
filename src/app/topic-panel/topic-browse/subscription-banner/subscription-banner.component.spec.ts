import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionBannerComponent } from './subscription-banner.component';

describe('SubscriptionBannerComponent', () => {
  let component: SubscriptionBannerComponent;
  let fixture: ComponentFixture<SubscriptionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
