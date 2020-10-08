import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-link-item-dropdown',
  templateUrl: './task-link-item-dropdown.component.html',
  styleUrls: ['./task-link-item-dropdown.component.css']
})
export class TaskLinkItemDropdownComponent implements OnInit {

  flagDropdown = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown() {
    console.log(this.flagDropdown);
    this.flagDropdown = !this.flagDropdown;
  }
}
