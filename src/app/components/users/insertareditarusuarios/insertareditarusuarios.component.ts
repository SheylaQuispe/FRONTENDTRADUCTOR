import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-insertareditarusuarios',
    providers: [provideNativeDateAdapter()],
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
  MatNativeDateModule],
  templateUrl: './insertareditarusuarios.component.html',
  styleUrl: './insertareditarusuarios.component.css'
})
export class InsertareditarusuariosComponent implements OnInit{
 form: FormGroup = new FormGroup({});
   maxDate: Date = new Date(); 
  users: Users = new Users();
  estado: boolean = true;
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private uS: UsersService,
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
      codigo: [''],
      nombre: ['', Validators.required],
      contrasena: ['', Validators.required],
      telefono: ['', Validators.required],
      fecha: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.users.id = this.form.value.codigo;
      this.users.username = this.form.value.nombre;
      this.users.password = this.form.value.contrasena;
      this.users.telefono = this.form.value.telefono;
      this.users.fechaNacimiento = this.form.value.fecha;
      this.users.enabled = this.form.value.status;
      if (this.edicion) {
        //actualizar
        this.uS.update(this.users).subscribe(() => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        });
      } else {
        //insertar
        this.uS.insert(this.users).subscribe(() => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        });
      }
      this.router.navigate(['usuarios']);
    }
  }

  init() {
    if (this.edicion) {
      this.uS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          codigo: new FormControl(data.id),
          nombre: new FormControl(data.username),
          contrasena: new FormControl(data.password),
          telefono: new FormControl(data.telefono),
          fecha: new FormControl(data.fechaNacimiento),
          status: new FormControl(data.enabled),
        });
      });
    }
  }
}
