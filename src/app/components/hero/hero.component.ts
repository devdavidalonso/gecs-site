import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Center {
  id: string;
  name: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly centers: Center[] = [
    {
      id: 'lar-do-alvorecer-marlene-nobre',
      name: 'Lar do Alvorecer Marlene Nobre',
      image: 'images/centros/lar-do-alvorecer.png',
      url: '/centros/lar-do-alvorecer-marlene-nobre',
    },
    {
      id: 'ambulatorio-dr-bezerra-de-menezes',
      name: 'Ambulatório Dr. Bezerra de Menezes',
      image: 'images/centros/ambulatorio-dr-bezerra-de-menezes.png',
      url: '/centros/ambulatorio-dr-bezerra-de-menezes',
    },
    {
      id: 'centro-de-divulgacao-freitas-nobre',
      name: 'Centro de Divulgação Freitas Nobre',
      image: 'images/centros/centro-de-divulgacao-freitas-nobre.png',
      url: '/centros/centro-de-divulgacao-freitas-nobre',
    },
    {
      id: 'centro-educacional-prof-paulo-rossi-severino',
      name: 'Centro Educacional Prof. Paulo Rossi Severino',
      image: 'images/centros/centro-educacional-prof-paulo-rossi-severino.png',
      url: '/centros/centro-educacional-prof-paulo-rossi-severino',
    },
  ];
}
