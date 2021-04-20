import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo {{ id }} works!

    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  public id='';
  constructor(private Route:ActivatedRoute) {
    this.Route.parent.params.subscribe(parametros=>{
      console.log('hija',parametros.id);
      this.id=parametros.id;
    })
   }

  ngOnInit() {
  }

}
