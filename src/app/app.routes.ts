import { Routes } from '@angular/router';
import { PagoComponent } from './components/pago/pago.component';
import { InsertareditarComponent } from './components/pago/insertareditar/insertareditar.component';

export const routes: Routes = [

    {
        path:'pagos',
        component: PagoComponent,
        children:[{
            path:'insertareditar', component: InsertareditarComponent
        },
        {
            path:'ediciones/:id', component: InsertareditarComponent
        }
    ],
    },


];
