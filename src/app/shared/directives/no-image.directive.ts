import { Directive, ElementRef, HostListener } from '@angular/core';
import {IMAGES} from 'src/app/shared/constants/images-constants';

@Directive({
  selector: '[appNoImage]'
})
export class NoImageDirective {

  constructor(private elementRef: ElementRef) { }
  @HostListener('error')
  onError(){
    this.elementRef.nativeElement.src = IMAGES.noImage.url;
  }

}
