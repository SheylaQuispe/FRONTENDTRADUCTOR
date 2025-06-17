import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../../services/pago.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Pago } from '../../../models/pago';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-listarpago',
  imports: [
  MatTableModule,
  CommonModule,
  RouterLink,
  MatIconModule],
  templateUrl: './listarpago.component.html',
  styleUrl: './listarpago.component.css'
})
export class ListarpagoComponent implements OnInit{
  dataSource: MatTableDataSource<Pago> = new MatTableDataSource();

  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5','c6','c7'];

  constructor(private pS: PagoService){}
  ngOnInit(): void {
      this.pS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.pS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.pS.deleteA(id).subscribe((data) => {
      this.pS.list().subscribe((data) => {
        this.pS.setList(data);
      });
    });
  }
}
