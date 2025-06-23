import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarcompartirComponent } from './listarcompartir/listarcompartir.component';

@Component({
  selector: 'app-compartir',
  imports: [RouterOutlet,ListarcompartirComponent],
  templateUrl: './compartir.component.html',
  styleUrl: './compartir.component.css'
})
export class CompartirComponent {
  constructor(public route:ActivatedRoute){}
}
