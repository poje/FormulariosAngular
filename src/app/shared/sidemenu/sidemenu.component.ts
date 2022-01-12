import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string,
  ruta: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  templateMenu: MenuItem[] = [
    {
      texto: 'basicos',
      ruta: './template/basicos'
    },
    {
      texto: 'dinamicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'switches',
      ruta: './template/switches'
    }
  ]

  reactiveMenu: MenuItem[] = [
    {
      texto: 'basicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'dinamicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'switches',
      ruta: './reactive/switches'
    }
  ]

}
