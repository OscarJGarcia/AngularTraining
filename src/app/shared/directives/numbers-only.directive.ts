import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[numbersOnly]',
})
export class NumbersOnlyDirective {
  constructor(private elementRef: ElementRef) {}
  @HostListener('input', ['$event'])
  onChangeInput(event: Event) {
    const numbersOnly = /[^0-9/]*/g;
    const initValue = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = initValue.replace(numbersOnly, '');
    if (initValue !== this.elementRef.nativeElement.value) {
      event.stopPropagation;
    }
  }
}
