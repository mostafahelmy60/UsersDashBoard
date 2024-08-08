import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCard]',
  standalone: true
})
export class CardDirective {

  constructor(private ref:ElementRef) {
    this.ref.nativeElement.style.marginTop = "5px";
   }

  @HostListener('mouseover') mouseOver(){
    this.ref.nativeElement.style.boxShadow = "0px 0px 10px 10px lightgray";
    this.ref.nativeElement.style.border = "none";
  }

  @HostListener('mouseleave') mouseLeave(){
    this.ref.nativeElement.style.boxShadow = "none";
    this.ref.nativeElement.style.border = "1px solid lightgray";
  }

}
