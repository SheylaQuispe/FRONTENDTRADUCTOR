import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Compartir } from '../../../models/compartir';
import { CompartirService } from '../../../services/compartir.service';

@Component({
  selector: 'app-listarcompartir',
  imports: [],
  templateUrl: './listarcompartir.component.html',
  styleUrl: './listarcompartir.component.css'
})
export class ListarcompartirComponent implements OnInit{
  dataSource: MatTableDataSource<Compartir> = new MatTableDataSource();

  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

  constructor(private cS: CompartirService) {}

  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.cS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.cS.deleteA(id).subscribe((data) => {
      this.cS.list().subscribe((data) => {
        this.cS.setList(data);
      });
    });
  }
}
