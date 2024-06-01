import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]',
  standalone: true
})
export class EstiloHermanosDirective {

  constructor(private element: ElementRef) { 
    this.element.nativeElement.style.textTransform = 'capitalize';
    this.element.nativeElement.style.color = 'red';
  }

}
