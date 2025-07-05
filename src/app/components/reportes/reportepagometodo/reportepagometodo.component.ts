import { CommonModule } from '@angular/common';
import { PagoService } from './../../../services/pago.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-reportepagometodo',
  imports: [BaseChartDirective, CommonModule],
  templateUrl: './reportepagometodo.component.html',
  styleUrl: './reportepagometodo.component.css'
})
export class ReportepagometodoComponent implements OnInit {
  hasData = false;

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: string[] = [];
  barChartType: ChartType = 'pie'; // O 'doughnut', 'pie', etc.
  barChartLegend = true;

  barChartData: ChartDataset[] = [];
  constructor(private pS:PagoService ) { }

  ngOnInit(): void {
        this.pS.getSumMetodo().subscribe((data) => {
      if (data.length > 0) {
        this.hasData = true;

        this.barChartLabels = data.map((item) => item.metodo);
        this.barChartData = [
          {
            data: data.map((item) => item.monto),
            label: 'Monto por método de pago',
            backgroundColor: ['#42a5f5', '#512DA8', '#512DA8', '#ab47bc'],
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
