import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Escaneo } from '../../../models/escaneo';
import { EscaneoService } from '../../../services/escaneo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { OcrService } from '../../../services/ocr.service';


@Component({
  selector: 'app-insertareditarescaneo',
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatNativeDateModule
],
  templateUrl: './insertareditarescaneo.component.html',
  styleUrl: './insertareditarescaneo.component.css'
})
export class InsertareditarescaneoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  maxDate: Date = new Date(); 
  escaneo: Escaneo = new Escaneo();
  id: number = 0;
  edicion: boolean = false;
  imagenBase64: string = '';
  textoExtraido: string = '';
  
  cargarImagen(event: any) {
  const archivo = event.target.files[0];
  const lector = new FileReader();

  if (archivo) {
    lector.onload = () => {
      this.imagenBase64 = lector.result as string;
      console.log("Imagen codificada:", this.imagenBase64);
      this.form.get('eimagen')?.setValue('ok'); // Marca el campo como válido
    };
    lector.readAsDataURL(archivo);
  }}
  extraerTexto() {
  if (this.imagenBase64) {
    this.ocrService.extractText(this.imagenBase64).subscribe((res: any) => {
      this.textoExtraido = res.ParsedResults?.[0]?.ParsedText || 'Texto no detectado.';
      console.log('Texto detectado:', this.textoExtraido);
    }, error => {
      console.error('Error al procesar OCR:', error);
    });
  } else {
    console.warn('No hay imagen cargada.');
  }
}

  constructor(
    private eS: EscaneoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ocrService: OcrService,
  ) {}
 

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      eidescaneo: [''],
      eimagen: ['', Validators.required],
      efecha: ['', Validators.required],
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.escaneo.idEscaneo = this.form.value.eidescaneo;
      this.escaneo.imagen = this.imagenBase64;
      this.escaneo.fechaEscaneo = this.form.value.efecha;
      
      if (this.edicion) {
        //actualizar
        this.eS.update(this.escaneo).subscribe(() => {
          this.eS.list().subscribe((data) => {
            this.eS.setList(data);
          });
        });
      } else {
        //insertar
        this.eS.insert(this.escaneo).subscribe(() => {
          this.eS.list().subscribe((data) => {
            this.eS.setList(data);
            
          });
        });
      }
      this.router.navigate(['escaneos']);
    }
  }
  init() {
    if (this.edicion) {
      this.eS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          eidescaneo: new FormControl(data.idEscaneo),
          eimagen: new FormControl('imagen cargada'),  // le das valor para que el form sea válido
          efecha: new FormControl(data.fechaEscaneo),
          
        });
      });
    }
  }
}
