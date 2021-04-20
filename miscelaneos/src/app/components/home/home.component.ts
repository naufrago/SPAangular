import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-styles></app-ng-styles>
    <hr>
    <app-css></app-css>
    <hr>
    <app-clases></app-clases>
    <hr> 
    <p [appResaltado]="'orange'">Directiva personalizada</p> 
    <hr>
    <app-ng-swich></app-ng-swich>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  constructor() { }

  ngOnInit() { console.log("ngOnInit");}
  ngOnChanges(){console.log("OnChanges");}
  ngDoCheck(){console.log("DoCheck");}
  ngAfterContentChecked(){console.log("AfterContentChecked");}
  ngAfterContentInit(){console.log("AfterContentInit");}
  ngAfterViewChecked(){console.log("AfterViewChecked");}
  ngAfterViewInit(){console.log("AfterViewInit");}
  ngOnDestroy(){console.log("OnDestroy");}

}
