import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../../services/pago.service';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-reportepagorecaudacion',
  imports: [BaseChartDirective,
    FormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule,
  MatNativeDateModule],
  templateUrl: './reportepagorecaudacion.component.html',
  styleUrl: './reportepagorecaudacion.component.css',
})
export class ReportepagorecaudacionComponent implements OnInit {
  fechaSeleccionada: string = '';
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Date[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private pS: PagoService) {}
  ngOnInit(): void {
    const hoy = new Date().toISOString().split('T')[0];
    this.fechaSeleccionada = hoy;
    this.buscarRecaudacion();
  }

   buscarRecaudacion(): void {
    if (!this.fechaSeleccionada) return;

    this.pS.getSum(this.fechaSeleccionada).subscribe((data) => {
      if (!data || data.length === 0) {
        this.barChartData = [];
        this.barChartLabels = [];
        return;
      }

      this.barChartLabels = data.map((item) => item.fechaPago);
      this.barChartData = [
        {
          data: data.map((item) => item.monto),
          label: 'Monto recaudado',
          backgroundColor: ['#2196f3', '#e8745b', '#ffb74d', '#4caf50'],
          borderColor: '#000000',
          borderWidth: 3,
        },
      ];
    });
  }
}
