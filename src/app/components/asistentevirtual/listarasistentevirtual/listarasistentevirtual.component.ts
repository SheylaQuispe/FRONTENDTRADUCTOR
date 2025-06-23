import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Asistentevirtual } from '../../../models/asistentevirtual';
import { AsistentevirtualService } from '../../../services/asistentevirtual.service';

@Component({
  selector: 'app-listarasistentevirtual',
  imports: [],
  templateUrl: './listarasistentevirtual.component.html',
  styleUrl: './listarasistentevirtual.component.css'
})
export class ListarasistentevirtualComponent implements OnInit{
    dataSource: MatTableDataSource<Asistentevirtual> = new MatTableDataSource();

  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

  constructor(private aS: AsistentevirtualService) {}

  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.aS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.aS.deleteA(id).subscribe((data) => {
      this.aS.list().subscribe((data) => {
        this.aS.setList(data);
      });
    });
  }

}
