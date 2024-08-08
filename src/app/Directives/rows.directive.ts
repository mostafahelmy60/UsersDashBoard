import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRows]',
  standalone: true
})
export class RowsDirective {

  constructor(private ref: ElementRef) {
    this.ref.nativeElement.style.backgroundColor = "#FFFFFF"
   }

  @HostListener('mouseover') mouseOver(){
    this.ref.nativeElement.style.backgroundColor = "#F7F7F5";
    this.ref.nativeElement.style.fontSize = "14pt";
    this.ref.nativeElement.style.cursor = "pointer";
  }
  
  @HostListener('mouseleave') mouseLeave(){
    this.ref.nativeElement.style.backgroundColor = "#FFFFFF";
    this.ref.nativeElement.style.fontSize = "12pt";
  }

}
