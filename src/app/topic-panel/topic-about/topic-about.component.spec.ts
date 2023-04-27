import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAboutComponent } from './topic-about.component';

describe('TopicAboutComponent', () => {
  let component: TopicAboutComponent;
  let fixture: ComponentFixture<TopicAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
