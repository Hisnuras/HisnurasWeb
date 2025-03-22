import { Component } from '@angular/core';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true, // Indique que c'est un composant autonome
  imports: [MatToolbarModule, MatButtonModule], // Ajoute les modules nécessaires
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
