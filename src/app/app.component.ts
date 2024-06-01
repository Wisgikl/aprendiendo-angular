import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { HermanoComponent } from './hermano/hermano.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PadreComponent,HermanoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular-youtube';
}
