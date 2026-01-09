import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendu]'
})
export class Rendu {

  constructor(e: ElementRef) { 
    const el: HTMLElement = e.nativeElement;
    el.style.color = "green";
    el.style.fontWeight = "bold";
    el.innerHTML += "*******"
  }

}
