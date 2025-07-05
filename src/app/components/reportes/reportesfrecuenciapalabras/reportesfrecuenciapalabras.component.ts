import { Component, OnInit } from '@angular/core';
import { GlosarioService } from '../../../services/glosario.service';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reportesfrecuenciapalabras',
  imports: [BaseChartDirective, CommonModule],
  templateUrl: './reportesfrecuenciapalabras.component.html',
  styleUrl: './reportesfrecuenciapalabras.component.css'
})
export class ReportesfrecuenciapalabrasComponent implements OnInit{
  hasData = false;
  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private gS: GlosarioService) {}
  ngOnInit(): void {
    this.gS.getPalabrasFrecuentes().subscribe((data) => {
      if (data.length > 0) {
        this.hasData = true;
        this.barChartLabels = data.map((item) => item.descripcion);
        this.barChartData = [
          {
            data: data.map((item) => item.cantidadPalabras),
            label: 'Frecuencia de Palabras',
            backgroundColor: '#42A5F5',
            borderColor: '#000000',
            borderWidth: 3,
          },
        ];
      } else {
        this.hasData = false;
      }
    });
  }
}
