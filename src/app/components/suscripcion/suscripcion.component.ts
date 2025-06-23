import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarsuscripcionComponent } from './listarsuscripcion/listarsuscripcion.component';

@Component({
  selector: 'app-suscripcion',
  imports: [RouterOutlet,ListarsuscripcionComponent],
  templateUrl: './suscripcion.component.html',
  styleUrl: './suscripcion.component.css'
})
export class SuscripcionComponent {
<<<<<<< HEAD
constructor(public route:ActivatedRoute){}
=======
  constructor(public route: ActivatedRoute) { }
>>>>>>> 89310e524723779633d3ce0714fe52a7430af110
}
