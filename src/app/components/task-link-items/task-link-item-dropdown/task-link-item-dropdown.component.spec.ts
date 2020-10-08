import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLinkItemDropdownComponent } from './task-link-item-dropdown.component';

describe('TaskLinkItemDropdownComponent', () => {
  let component: TaskLinkItemDropdownComponent;
  let fixture: ComponentFixture<TaskLinkItemDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskLinkItemDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskLinkItemDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
