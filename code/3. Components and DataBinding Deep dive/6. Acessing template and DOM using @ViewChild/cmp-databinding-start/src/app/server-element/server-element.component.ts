import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // ViewEncapsulation.Native or Emulated (default)
})
export class ServerElementComponent implements OnInit {
  @Input() element: {type: string, name: string, content: string}; //CODE CHANGES HERE
  constructor() { }

  ngOnInit(): void {
  }

}
