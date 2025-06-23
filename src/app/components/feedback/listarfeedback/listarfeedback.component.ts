import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Feedback } from '../../../models/feedback';
import { FeedbackService } from '../../../services/feedback.service';

@Component({
  selector: 'app-listarfeedback',
  imports: [],
  templateUrl: './listarfeedback.component.html',
  styleUrl: './listarfeedback.component.css'
})
export class ListarfeedbackComponent implements OnInit{
  dataSource: MatTableDataSource<Feedback> = new MatTableDataSource();

  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

  constructor(private fS: FeedbackService) {}

  ngOnInit(): void {
    this.fS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.fS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.fS.deleteA(id).subscribe((data) => {
      this.fS.list().subscribe((data) => {
        this.fS.setList(data);
      });
    });
  }

}
