import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../../services/pago.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Pago } from '../../../models/pago';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-listarpago',
  imports: [MatTableModule,CommonModule],
  templateUrl: './listarpago.component.html',
  styleUrl: './listarpago.component.css'
})
export class ListarpagoComponent implements OnInit{
  dataSource: MatTableDataSource<Pago> = new MatTableDataSource();

  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5'];

  constructor(private pS: PagoService){}
  ngOnInit(): void {
      this.pS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
