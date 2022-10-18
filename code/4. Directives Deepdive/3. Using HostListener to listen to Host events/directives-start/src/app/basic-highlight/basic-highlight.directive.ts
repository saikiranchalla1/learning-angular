import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    // change the background of the element on which this directive is used

    constructor(private elementRef: ElementRef) {
        
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
