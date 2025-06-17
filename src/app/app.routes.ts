import { Routes } from '@angular/router';
import { PagoComponent } from './components/pago/pago.component';
import { InsertareditarComponent } from './components/pago/insertareditar/insertareditar.component';
import { SuscripcionComponent } from './components/suscripcion/suscripcion.component';
import { InsertareditarsuscripcionComponent } from './components/suscripcion/insertareditarsuscripcion/insertareditarsuscripcion.component';

export const routes: Routes = [

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


];
