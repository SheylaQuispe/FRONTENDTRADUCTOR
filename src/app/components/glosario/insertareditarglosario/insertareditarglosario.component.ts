import { Glosario } from './../../../models/glosario';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { GlosarioService } from '../../../services/glosario.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-insertareditarglosario',
  providers: [provideNativeDateAdapter()],
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule],
  templateUrl: './insertareditarglosario.component.html',
  styleUrl: './insertareditarglosario.component.css'
})
export class InsertareditarglosarioComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  glosario: Glosario = new Glosario();
  

  id: number = 0;
  edicion: boolean = false;
  
  constructor(
    private gS: GlosarioService,
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
      idg: [''],
      palabrag: ['', Validators.required],
      descripciong: ['', Validators.required],
    });
  }
  aceptar() {
    if (this.form.valid) {
      this.glosario.idGlosario = this.form.value.idg;
      this.glosario.palabra = this.form.value.palabrag;
      this.glosario.descripcion = this.form.value.descripciong;
      
      if (this.edicion) {
        //actualizar
        this.gS.update(this.glosario).subscribe(() => {
          this.gS.list().subscribe((data) => {
            this.gS.setList(data);
          });
        });
      } else {
        //insertar
        this.gS.insert(this.glosario).subscribe(() => {
          this.gS.list().subscribe((data) => {
            this.gS.setList(data);
          });
        });
      }
      this.router.navigate(['glosarios']);
    }
  }
  init() {
    if (this.edicion) {
      this.gS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idg: new FormControl(data.idGlosario),
          palabrag: new FormControl(data.palabra),
          descripciong: new FormControl(data.descripcion),
         
        });
      });
    }
  }
}
