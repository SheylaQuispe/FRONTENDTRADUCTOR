import { Component, OnInit } from '@angular/core';
import { Escaneo } from '../../../models/escaneo';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EscaneoService } from '../../../services/escaneo.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listarescaneo',
  imports: [MatTableModule,
  CommonModule,
  RouterLink,
  MatIconModule],
  templateUrl: './listarescaneo.component.html',
  styleUrl: './listarescaneo.component.css'
})
export class ListarescaneoComponent implements OnInit{
  dataSource: MatTableDataSource<Escaneo> = new MatTableDataSource();

  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5'];

  constructor(private eS: EscaneoService) {}

  ngOnInit(): void {
    this.eS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.eS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.eS.deleteA(id).subscribe((data) => {
      this.eS.list().subscribe((data) => {
        this.eS.setList(data);
      });
    });
  }
}
