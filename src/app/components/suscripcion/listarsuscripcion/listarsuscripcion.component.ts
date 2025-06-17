import { Component, OnInit } from '@angular/core';
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
  templateUrl: './listarsuscripcion.component.html',
  styleUrl: './listarsuscripcion.component.css'
})
export class ListarsuscripcionComponent implements OnInit{

dataSource: MatTableDataSource<Suscripcion> = new MatTableDataSource();

displayedColumns: string[] = ['c1','c2','c3','c4','c5','c6','c7','c8'];

constructor(private sS:SuscripcionService){}

ngOnInit(): void {
    this.sS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.sS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.sS.deleteS(id).subscribe(() => {
      this.sS.list().subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
      });
    });
  }

}
