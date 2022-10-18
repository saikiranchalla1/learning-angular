import { Directive } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) { // note the name of the property is same as the directive
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateREf);
    } else {
      this.viewContainerRef.clear();
    }
  }


  constructor(private templateREf: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
