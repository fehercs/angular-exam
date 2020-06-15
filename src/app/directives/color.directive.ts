import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @HostBinding('style.backgroundColor') public backgroundColor = 'white';


  constructor() { }

  @HostListener('mouseenter') public mouseEnter() {
    this.backgroundColor = this.isCat ? 'red' : 'blue';
  }

  @HostListener('mouseleave') public mouseLeave() {
    this.backgroundColor = 'white';
  }

}
