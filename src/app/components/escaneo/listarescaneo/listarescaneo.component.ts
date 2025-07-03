import { Component, OnInit } from '@angular/core';
import { Escaneo } from '../../../models/escaneo';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EscaneoService } from '../../../services/escaneo.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { OcrService } from '../../../services/ocr.service';

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

  constructor(private eS: EscaneoService,private ocrService: OcrService) {}

  ngOnInit(): void {
    this.eS.list().subscribe((data) => {
      // Procesar OCR por cada imagen base64
      data.forEach((escaneo) => {
        if (escaneo.imagen) {
          this.ocrService.extractText(escaneo.imagen).subscribe(
            (res: any) => {
              escaneo['textoExtraido'] = res.ParsedResults?.[0]?.ParsedText || 'Texto no detectado.';
            },
            (error) => {
              console.error('Error OCR:', error);
              escaneo['textoExtraido'] = 'Error al extraer texto.';
            }
          );
        } else {
          escaneo['textoExtraido'] = 'Sin imagen.';
        }
      });

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
