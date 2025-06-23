import { Routes } from '@angular/router';
import { PagoComponent } from './components/pago/pago.component';
import { InsertareditarComponent } from './components/pago/insertareditar/insertareditar.component';
<<<<<<< HEAD
import { UsersComponent } from './components/users/users.component';
import { TraduccionComponent } from './components/traduccion/traduccion.component';
import { SuscripcionComponent } from './components/suscripcion/suscripcion.component';
import { LenguajeprogramacionComponent } from './components/lenguajeprogramacion/lenguajeprogramacion.component';
import { GlosarioComponent } from './components/glosario/glosario.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { EscaneoComponent } from './components/escaneo/escaneo.component';
import { CompartirComponent } from './components/compartir/compartir.component';
import { AsistentevirtualComponent } from './components/asistentevirtual/asistentevirtual.component';
import { InsertareditarusuariosComponent } from './components/users/insertareditarusuarios/insertareditarusuarios.component';
=======
import { SuscripcionComponent } from './components/suscripcion/suscripcion.component';
import { InsertareditarsuscripcionComponent } from './components/suscripcion/insertareditarsuscripcion/insertareditarsuscripcion.component';
>>>>>>> 89310e524723779633d3ce0714fe52a7430af110

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagos',
    pathMatch: 'full',
  },

<<<<<<< HEAD
  {
    path: 'pagos',
    component: PagoComponent,
    children: [
      {
        path: 'insertareditar',
        component: InsertareditarComponent,
      },
      {
        path: 'ediciones/:id',
        component: InsertareditarComponent,
      },
    ],
  },
=======
    {
        path:'pagos',
        component: PagoComponent,
        children:
        [{path:'insertareditar', component: InsertareditarComponent},
        {path:'ediciones/:id', component: InsertareditarComponent}],
    },

    {
        path:'suscripciones',
        component: SuscripcionComponent,
        children:
        [{path:'insertareditarsuscripcion', component: InsertareditarsuscripcionComponent},
        {path:'ediciones/:id', component: InsertareditarsuscripcionComponent}],
    },

>>>>>>> 89310e524723779633d3ce0714fe52a7430af110

  {
    path: 'usuarios',
    component: UsersComponent,
    children: [
      {
        path: 'insertareditarusuarios',
        component: InsertareditarusuariosComponent,
      },
      {
        path: 'ediciones-usuario/:id',
        component: InsertareditarusuariosComponent,
      },
    ],
  },
  {
    path: 'traducciones',
    component: TraduccionComponent,
    children: [
      {
        path: 'insertareditarusuarios',
        component: InsertareditarusuariosComponent,
      },
      {
        path: 'ediciones-traducciones/:id',
        component: InsertareditarusuariosComponent,
      },
    ],
  },
  {
    path: 'suscripciones',
    component: SuscripcionComponent,
  },
  {
    path: 'lenguajesprogramacion',
    component: LenguajeprogramacionComponent,
  },
  {
    path: 'glosarios',
    component: GlosarioComponent,
  },
  {
    path: 'feedbacks',
    component: FeedbackComponent,
  },
  {
    path: 'escaneos',
    component: EscaneoComponent,
  },
  {
    path: 'compartidos',
    component: CompartirComponent,
  },
  {
    path: 'asistentesvirtuales',
    component: AsistentevirtualComponent,
  },
];
