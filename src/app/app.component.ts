import { Component } from '@angular/core';
<<<<<<< HEAD
import { MenuComponent } from './components/menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MenuComponent,RouterOutlet],
=======
import { PagoComponent } from './components/pago/pago.component';
import { SuscripcionComponent } from './components/suscripcion/suscripcion.component';

@Component({
  selector: 'app-root',
  imports: [PagoComponent, SuscripcionComponent],
>>>>>>> 89310e524723779633d3ce0714fe52a7430af110
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fronttraductor';
}
