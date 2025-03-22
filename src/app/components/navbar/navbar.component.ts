import { Component , HostListener  } from '@angular/core';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true, // Indique que c'est un composant autonome
  imports: [
    MatToolbarModule,
     MatButtonModule,
     MatIconModule,
    ], // Ajoute les modules nécessaires
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  // Détecte le scroll et applique ou retire la classe 'scrolled' sur la navbar
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.mat-toolbar');
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }
}
