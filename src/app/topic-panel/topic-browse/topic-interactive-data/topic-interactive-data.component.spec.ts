import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicInteractiveDataComponent } from './topic-interactive-data.component';

describe('TopicInteractiveDataComponent', () => {
  let component: TopicInteractiveDataComponent;
  let fixture: ComponentFixture<TopicInteractiveDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicInteractiveDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicInteractiveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
