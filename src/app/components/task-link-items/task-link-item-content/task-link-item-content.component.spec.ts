import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLinkItemContentComponent } from './task-link-item-content.component';

describe('TaskLinkItemContentComponent', () => {
  let component: TaskLinkItemContentComponent;
  let fixture: ComponentFixture<TaskLinkItemContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskLinkItemContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskLinkItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
