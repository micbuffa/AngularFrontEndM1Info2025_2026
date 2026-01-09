import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNonRendu]'
})
export class NonRendu {

  constructor(el: ElementRef) { 
    const element: HTMLElement = el.nativeElement;
    element.style.color = "red";
  }

}
