import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationGraphComponent } from './navigation-graph.component';

describe('NavigationGraphComponent', () => {
  let component: NavigationGraphComponent;
  let fixture: ComponentFixture<NavigationGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
