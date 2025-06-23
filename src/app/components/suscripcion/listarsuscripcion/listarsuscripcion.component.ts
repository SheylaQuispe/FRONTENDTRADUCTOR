import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Suscripcion } from '../../../models/suscripcion';
import { MatTableDataSource } from '@angular/material/table';
import { SuscripcionService } from '../../../services/suscripcion.service';

@Component({
  selector: 'app-listarsuscripcion',
  imports: [],
=======
import { SuscripcionService } from '../../../services/suscripcion.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Suscripcion } from '../../../models/suscripcion';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listarsuscripcion',
  imports: [
    MatTableModule,
    CommonModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
  ],
>>>>>>> 89310e524723779633d3ce0714fe52a7430af110
  templateUrl: './listarsuscripcion.component.html',
  styleUrl: './listarsuscripcion.component.css'
})
export class ListarsuscripcionComponent implements OnInit{

<<<<<<< HEAD
  dataSource: MatTableDataSource<Suscripcion> = new MatTableDataSource();

  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

  constructor(private sS: SuscripcionService) {}

  ngOnInit(): void {
=======
dataSource: MatTableDataSource<Suscripcion> = new MatTableDataSource();

displayedColumns: string[] = ['c1','c2','c3','c4','c5','c6','c7','c8'];

constructor(private sS:SuscripcionService){}

ngOnInit(): void {
>>>>>>> 89310e524723779633d3ce0714fe52a7430af110
    this.sS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.sS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
<<<<<<< HEAD
    eliminar(id: number) {
    this.sS.deleteA(id).subscribe((data) => {
      this.sS.list().subscribe((data) => {
        this.sS.setList(data);
      });
    });
  }
=======
  eliminar(id: number) {
    this.sS.deleteS(id).subscribe(() => {
      this.sS.list().subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
      });
    });
  }

>>>>>>> 89310e524723779633d3ce0714fe52a7430af110
}
