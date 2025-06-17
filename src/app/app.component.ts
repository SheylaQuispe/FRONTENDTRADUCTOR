import { Component } from '@angular/core';
import { PagoComponent } from './components/pago/pago.component';
import { SuscripcionComponent } from './components/suscripcion/suscripcion.component';

@Component({
  selector: 'app-root',
  imports: [PagoComponent, SuscripcionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fronttraductor';
}
