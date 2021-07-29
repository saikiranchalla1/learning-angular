import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // can be None or ShadowDom (ShadowDom is only supported in latest browsers)
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy {
  // Creating a custom property in a component: @Input()'
  // @Input() element: {type: string, name: string, content: string};
  // assigning an alias to Custom property
  @Input('srvElement') element: {type: string, name: string, content: string};

  @Input() name: string;

  constructor() { 
    console.log('constructor called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

}
