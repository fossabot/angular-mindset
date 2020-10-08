import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-help-icon',
  templateUrl: './help-icon.component.html',
  styleUrls: ['./help-icon.component.css']
})
export class HelpIconComponent implements OnInit, AfterViewInit {

  @Input() icon;

  iconName;

  @ViewChild('content') element: ElementRef;

  constructor(private ref: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.iconName = this.icon ? this.icon : this.element.nativeElement.textContent;
    this.ref.detectChanges(); // Update twice to output icon.
  }

  ngOnInit(): void {
    this.ref.detach(); // Avoid unchecked expression error and general multi update because not needed.

    this.ref.detectChanges(); // Update once to acquire <ng-content>
  }
}
