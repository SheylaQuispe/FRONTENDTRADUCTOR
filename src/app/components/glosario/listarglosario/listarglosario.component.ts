import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Glosario } from '../../../models/glosario';
import { GlosarioService } from '../../../services/glosario.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listarglosario',
  imports: [MatTableModule, CommonModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './listarglosario.component.html',
  styleUrl: './listarglosario.component.css'
})
export class ListarglosarioComponent implements OnInit{

  dataSource: MatTableDataSource<Glosario> = new MatTableDataSource();

  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5'];

  constructor(private gS: GlosarioService) {}

  ngOnInit(): void {
    this.gS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.gS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.gS.deleteA(id).subscribe((data) => {
      this.gS.list().subscribe((data) => {
        this.gS.setList(data);
      });
    });
  }
}
