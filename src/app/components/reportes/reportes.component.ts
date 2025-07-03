import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ReportepagorecaudacionComponent } from './reportepagorecaudacion/reportepagorecaudacion.component';

@Component({
  selector: 'app-reportes',
  imports: [RouterOutlet,ReportepagorecaudacionComponent],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent {
constructor(public route: ActivatedRoute) {}
}
