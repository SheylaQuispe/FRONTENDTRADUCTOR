import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../../services/pago.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  metodos:{value:string,viewValue:string}[]=[
    {value:"Transferencia",viewValue:"Transferencia"},
    {value:"Yape",viewValue:"Yape"}
  ]

  constructor(
    private pS: PagoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      monto: ['', Validators.required],
      metodo: ['', Validators.required],
      fecha: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }
  aceptar() {
    if (this.form.valid) {
      this.pago.monto = this.form.value.monto;
      this.pago.metodo = this.form.value.metodo;
      this.pago.fechaPago = this.form.value.fecha;
      this.pago.estado = this.form.value.estado;
    
      this.pS.insert(this.pago).subscribe(() => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
        });
      });
    }
    this.router.navigate(['pagos']);
  }
  // Aquí puedes agregar métodos para manejar la lógica de inserción o edición de pagos

}
