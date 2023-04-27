import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPublicationsComponent } from './topic-publications.component';

describe('TopicPublicationsComponent', () => {
  let component: TopicPublicationsComponent;
  let fixture: ComponentFixture<TopicPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicPublicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
