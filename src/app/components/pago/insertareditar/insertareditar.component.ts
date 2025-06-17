import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../../services/pago.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pago } from '../../../models/pago';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core'

@Component({
  selector: 'app-insertareditar',
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
  templateUrl: './insertareditar.component.html',
  styleUrl: './insertareditar.component.css'
})
export class InsertareditarComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  pago: Pago = new Pago();
  estado:boolean=true
  id: number = 0;
  edicion: boolean = false;
  metodos:{value:string,viewValue:string}[]=[
    {value:"Transferencia",viewValue:"Transferencia"},
    {value:"Yape",viewValue:"Yape"},
  ];

  constructor(
    private pS: PagoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      codigo:[''],
      monto: ['', Validators.required],
      metodo: ['', Validators.required],
      fecha: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }
  aceptar() {
    if (this.form.valid) {
      this.pago.idPago = this.form.value.codigo;
      this.pago.monto = this.form.value.monto;
      this.pago.metodo = this.form.value.metodo;
      this.pago.fechaPago = this.form.value.fecha;
      this.pago.estado = this.form.value.estado;
    
     if (this.edicion) {
        //actualizar
        this.pS.update(this.pago).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      } else {
        //insertar
        this.pS.insert(this.pago).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['pagos']);
    }
  }

  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          codigo: new FormControl(data.idPago),
          monto: new FormControl(data.monto),
          metodo: new FormControl(data.metodo),
          fecha: new FormControl(data.fechaPago),
          estado: new FormControl(data.estado),
        });
      });
    }
  }

}
