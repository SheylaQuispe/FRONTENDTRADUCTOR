import { Component, OnInit } from '@angular/core';
import { Lenguajeprogramacion } from '../../../models/lenguajeprogramacion';
import { MatTableDataSource } from '@angular/material/table';
import { LenguajeprogramacionService } from '../../../services/lenguajeprogramacion.service';

@Component({
  selector: 'app-listarlenguajeprogramacion',
  imports: [],
  templateUrl: './listarlenguajeprogramacion.component.html',
  styleUrl: './listarlenguajeprogramacion.component.css'
})
export class ListarlenguajeprogramacionComponent implements OnInit{
  dataSource: MatTableDataSource<Lenguajeprogramacion> = new MatTableDataSource();

  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

  constructor(private lS: LenguajeprogramacionService) {}

  ngOnInit(): void {
    this.lS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.lS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.lS.deleteA(id).subscribe((data) => {
      this.lS.list().subscribe((data) => {
        this.lS.setList(data);
      });
    });
  }
}
