import { trigger, transition, animate, state, style } from '@angular/animations';
import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-task-link-item-dropdown',
  templateUrl: './task-link-item-dropdown.component.html',
  styleUrls: ['./task-link-item-dropdown.component.css'],
  animations: [
    trigger('dropdown', [
      state('void', style({ height: 0 })),
      state('*', style({ height: '*' })),
      transition(':enter', animate('0.5s ease')),
      transition(':leave', animate('0.5s ease'))
    ])
  ]
})
export class TaskLinkItemDropdownComponent implements OnInit {

  @Input() values = [];
  @Input() hint = 'Selection...';

  @Output() selected = new EventEmitter();

  selection = '';
  showDropdown = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown() {
    console.log(this.showDropdown);
    this.showDropdown = !this.showDropdown;
  }

  emitClickedIndex(value: string) {
    this.selected.next(this.values.indexOf(value));
  }
}
