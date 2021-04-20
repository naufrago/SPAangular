import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') nuevoColor:string;

  constructor(private el:ElementRef) {
      console.log("directiva llamada");
      // el.nativeElement.style.backgroundColor="yellow";
   }

   // hace que cuando pase el mouse sobre el elemento con la directiva cambie el color
  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
  }

  private resaltar(color:string ){
    this.el.nativeElement.style.backgroundColor = color ;
  }
}
