import { Component } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { PagoComponent } from './components/pago/pago.component';
import { SuscripcionComponent } from './components/suscripcion/suscripcion.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, PagoComponent, SuscripcionComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fronttraductor';
}