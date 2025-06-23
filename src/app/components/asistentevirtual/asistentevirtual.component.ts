import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarasistentevirtualComponent } from './listarasistentevirtual/listarasistentevirtual.component';

@Component({
  selector: 'app-asistentevirtual',
  imports: [RouterOutlet,ListarasistentevirtualComponent],
  templateUrl: './asistentevirtual.component.html',
  styleUrl: './asistentevirtual.component.css'
})
export class AsistentevirtualComponent {
  constructor(public route:ActivatedRoute){}
}
