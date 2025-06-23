import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarlenguajeprogramacionComponent } from './listarlenguajeprogramacion/listarlenguajeprogramacion.component';

@Component({
  selector: 'app-lenguajeprogramacion',
  imports: [RouterOutlet,ListarlenguajeprogramacionComponent],
  templateUrl: './lenguajeprogramacion.component.html',
  styleUrl: './lenguajeprogramacion.component.css'
})
export class LenguajeprogramacionComponent {
constructor(public route:ActivatedRoute){}
}
