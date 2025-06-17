import { Component, OnInit } from '@angular/core';
import { Suscripcion } from '../../../models/suscripcion';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SuscripcionService } from '../../../services/suscripcion.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-insertareditarsuscripcion',
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
  ],
  templateUrl: './insertareditarsuscripcion.component.html',
  styleUrl: './insertareditarsuscripcion.component.css'
})
export class InsertareditarsuscripcionComponent implements OnInit {
  // Aquí puedes definir las propiedades y métodos necesarios para tu componente
  form: FormGroup = new FormGroup({});
  suscripcion:Suscripcion = new Suscripcion();
  id: number = 0;
  edicion: boolean = false;
  tipos: { value: string; viewValue: string }[] = [
    { value: 'basico', viewValue: 'basico' },
    { value: 'estandar', viewValue: 'estandar' },
    { value: 'premium', viewValue: 'primium' },
  ];
  constructor(
    private sS:SuscripcionService,
    // Inicialización del servicio de suscripción
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      idS:[''],
      tipoS:['',Validators.required],
      estadoS:['',Validators.required],
      fechaInicioS:['',Validators.required],
      fechaFinS:['',Validators.required],
      historialS:['',Validators.required]
    });
  }// Métodos adicionales para manejar la inserción o edición de suscripciones

  aceptar(): void {
    if (this.form.valid) {
      this.suscripcion.idSuscripcion = this.form.value['idS'];
      this.suscripcion.tipo = this.form.value['tipoS'];
      this.suscripcion.estado = this.form.value['estadoS'];
      this.suscripcion.fechaInicio = this.form.value['fechaInicioS'];
      this.suscripcion.fechaFin = this.form.value['fechaFinS'];
      this.suscripcion.historial = this.form.value['historialS'];

      if (this.edicion) {
        //actualizar
        this.sS.update(this.suscripcion).subscribe(() => {
          this.sS.list().subscribe((data) => {
            this.sS.setList(data);
          });
        });
      } else {
        //insertar
        this.sS.insert(this.suscripcion).subscribe(() => {
          this.sS.list().subscribe((data) => {
            this.sS.setList(data);
          });
        });
      }
      this.router.navigate(['suscripciones']);
    }
  }

  init() {
    if (this.edicion) {
      this.sS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idS: new FormControl(data.idSuscripcion),
          tipoS: new FormControl(data.tipo),
          estadoS: new FormControl(data.estado),
          fechaInicioS: new FormControl(data.fechaInicio),
          fechaFinS: new FormControl(data.fechaFin),
          historialS: new FormControl(data.historial),
          
        });
      });
    }
  }
}
