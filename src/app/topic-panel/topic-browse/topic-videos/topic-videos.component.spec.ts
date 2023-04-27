import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicVideosComponent } from './topic-videos.component';

describe('TopicVideosComponent', () => {
  let component: TopicVideosComponent;
  let fixture: ComponentFixture<TopicVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
