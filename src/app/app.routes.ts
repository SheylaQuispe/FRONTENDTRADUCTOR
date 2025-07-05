import { ReportesfrecuenciapalabrasComponent } from './components/reportes/reportesfrecuenciapalabras/reportesfrecuenciapalabras.component';
import { ReportepagometodoComponent } from './components/reportes/reportepagometodo/reportepagometodo.component';
import { Routes } from '@angular/router';
import { PagoComponent } from './components/pago/pago.component';
import { InsertareditarComponent } from './components/pago/insertareditar/insertareditar.component';
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
import { InsertareditarsuscripcionComponent } from './components/suscripcion/insertareditarsuscripcion/insertareditarsuscripcion.component';
import { InsertareditarescaneoComponent } from './components/escaneo/insertareditarescaneo/insertareditarescaneo.component';
import { HomeComponent } from './components/home/home.component';
import { ReportepagorecaudacionComponent } from './components/reportes/reportepagorecaudacion/reportepagorecaudacion.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { InsertareditarglosarioComponent } from './components/glosario/insertareditarglosario/insertareditarglosario.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagos',
    pathMatch: 'full',
  },
  {
    path: 'homes',
    component: HomeComponent,
  },
  
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
    children:[
      {
        path:'insertareditarglosario', component: InsertareditarglosarioComponent,
      },
      {
        path:'ediciones/:id', component: InsertareditarglosarioComponent,
      }
    ]
  },
  {
    path: 'feedbacks',
    component: FeedbackComponent,
  },
  {
    path: 'escaneos',
    component: EscaneoComponent,
    children: [
      {
        path: 'insertareditarescaneo', component: InsertareditarescaneoComponent
        
      },
      {
        path: 'ediciones/:id',
        component: InsertareditarescaneoComponent,
      },
    ],
  },
  {
    path: 'compartidos',
    component: CompartirComponent,
  },
  {
    path: 'asistentesvirtuales',
    component: AsistentevirtualComponent,
  },
  {
    path:'reportes',component:ReportesComponent,
    children:[
      {
        path:'recaudaciones/fecha',component:ReportepagorecaudacionComponent
      },
      {
        path:'metodos',component:ReportepagometodoComponent
      },
      {
        path:'palabrasmasfrecuentes', component:ReportesfrecuenciapalabrasComponent
      }
    ],
    

  },
];
