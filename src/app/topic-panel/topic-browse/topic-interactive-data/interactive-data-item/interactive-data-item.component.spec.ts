import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveDataItemComponent } from './interactive-data-item.component';

describe('InteractiveDataItemComponent', () => {
  let component: InteractiveDataItemComponent;
  let fixture: ComponentFixture<InteractiveDataItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveDataItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveDataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
