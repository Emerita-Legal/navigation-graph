import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSwitchComponent } from './graph-switch.component';

describe('GraphSwitchComponent', () => {
  let component: GraphSwitchComponent;
  let fixture: ComponentFixture<GraphSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
