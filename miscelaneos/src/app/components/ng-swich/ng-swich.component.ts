import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-swich',
  templateUrl: './ng-swich.component.html',
  styleUrls: ['./ng-swich.component.css']
})
export class NgSwichComponent implements OnInit {

  alert:string = 'info';
  constructor() { }

  ngOnInit() {
  }

}
