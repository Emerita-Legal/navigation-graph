import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicBrowseComponent } from './topic-browse.component';

describe('TopicBrowseComponent', () => {
  let component: TopicBrowseComponent;
  let fixture: ComponentFixture<TopicBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicBrowseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
