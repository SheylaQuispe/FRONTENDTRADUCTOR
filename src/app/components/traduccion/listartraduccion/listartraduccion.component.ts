import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Traduccion } from '../../../models/traduccion';
import { TraduccionService } from '../../../services/traduccion.service';

@Component({
  selector: 'app-listartraduccion',
  imports: [],
  templateUrl: './listartraduccion.component.html',
  styleUrl: './listartraduccion.component.css'
})
export class ListartraduccionComponent implements OnInit{

  dataSource: MatTableDataSource<Traduccion> = new MatTableDataSource();

  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4'];
  
  constructor(private tS: TraduccionService) {}
     
  ngOnInit(): void {
    this.tS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.tS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.tS.deleteA(id).subscribe((data) => {
      this.tS.list().subscribe((data) => {
        this.tS.setList(data);
      });
    });
  }
}
