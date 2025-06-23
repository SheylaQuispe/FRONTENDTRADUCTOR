import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListartraduccionComponent } from './listartraduccion/listartraduccion.component';

@Component({
  selector: 'app-traduccion',
  imports: [RouterOutlet,ListartraduccionComponent],
  templateUrl: './traduccion.component.html',
  styleUrl: './traduccion.component.css'
})
export class TraduccionComponent {
constructor(public route:ActivatedRoute){}
}
