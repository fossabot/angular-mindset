import { GenericService } from './../../services/generic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  constructor(private generic: GenericService) { }

  ngOnInit(): void {
  }

  getTest() {
    this.generic.callTest().subscribe((v) => console.log(v));
  }
}
