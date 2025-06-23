import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarglosarioComponent } from './listarglosario/listarglosario.component';

@Component({
  selector: 'app-glosario',
  imports: [RouterOutlet,ListarglosarioComponent],
  templateUrl: './glosario.component.html',
  styleUrl: './glosario.component.css'
})
export class GlosarioComponent {
constructor(public route:ActivatedRoute){}
}
