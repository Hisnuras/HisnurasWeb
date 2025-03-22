import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true, // Déclarer le composant comme autonome
  imports: [
    RouterOutlet,
    NavbarComponent

  ], // Ajouter les modules nécessaires
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hisnuras';
}
