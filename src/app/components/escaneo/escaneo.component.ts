import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarescaneoComponent } from './listarescaneo/listarescaneo.component';

@Component({
  selector: 'app-escaneo',
  imports: [RouterOutlet,ListarescaneoComponent],
  templateUrl: './escaneo.component.html',
  styleUrl: './escaneo.component.css'
})
export class EscaneoComponent {
  constructor(public route:ActivatedRoute){}
}
