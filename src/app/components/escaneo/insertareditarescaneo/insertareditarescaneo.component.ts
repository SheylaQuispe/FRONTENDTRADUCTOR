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

  constructor(
    private eS: EscaneoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
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
      this.escaneo.imagen = this.form.value.eimagen;
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
          eimagen: new FormControl(data.imagen),
          efecha: new FormControl(data.fechaEscaneo),
          
        });
      });
    }
  }
}
