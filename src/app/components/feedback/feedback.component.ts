import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarfeedbackComponent } from './listarfeedback/listarfeedback.component';

@Component({
  selector: 'app-feedback',
  imports: [RouterOutlet,ListarfeedbackComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
constructor(public route:ActivatedRoute){}
}
