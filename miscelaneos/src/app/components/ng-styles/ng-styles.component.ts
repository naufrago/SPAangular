import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-styles',
  templateUrl: './ng-styles.component.html',
  styleUrls: ['./ng-styles.component.css']
})
export class NgStylesComponent implements OnInit {
  
  tamano:number = 10;
  constructor() { }

  ngOnInit() {
  }

}
