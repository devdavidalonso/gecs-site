import { Component, HostListener, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class HeaderComponent {
  readonly navItems: NavItem[] = [
    {
      label: 'Institucional',
      href: '/sobre-nos',
      children: [
        { label: 'Sobre', href: '/sobre-nos' },
        {
          label: 'Nosso Patrono Espiritual',
          href: '/nosso-patrono-espiritual',
        },
        { label: 'Transparência', href: '/transparencia' },
      ],
    },
    {
      label: 'Nossos Centros',
      href: '/centros',
      children: [
        {
          label: 'Lar do Alvorecer Marlene Nobre',
          href: '/centros/lar-do-alvorecer-marlene-nobre',
        },
        {
          label: 'Centro de Divulgação Freitas Nobre',
          href: '/centros/centro-de-divulgacao-freitas-nobre',
        },
        {
          label: 'Ambulatório Dr. Bezerra de Menezes',
          href: '/centros/ambulatorio-dr-bezerra-de-menezes',
        },
        {
          label: 'Centro Educacional Prof. Paulo Rossi Severino',
          href: '/centros/centro-educacional-prof-paulo-rossi-severino',
        },
      ],
    },
    {
      label: 'Atividades',
      href: '/atividades',
      children: [
        {
          label: 'Atendimento Fraterno',
          href: '/atividades/atendimento-fraterno',
        },
        {
          label: 'Cursos Doutrinários',
          href: '/atividades/cursos-doutrinarios',
        },
        { label: 'Evangelho Online', href: '/atividades/evangelho-online' },
        {
          label: 'Desenvolvimento Mediúnico',
          href: '/atividades/desenvolvimento-mediunico',
        },
        { label: 'Fluidoterapia', href: '/atividades/fluidoterapia' },
      ],
    },
    { label: 'Horários', href: '/grade-de-horarios' },
    { label: 'Novidades', href: '/novidades' },
    { label: 'Contato', href: '/contato' },
  ];

  readonly menuOpen = signal(false);
  readonly openSubmenu = signal<string | null>(null);
  readonly scrolled = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    if (!this.menuOpen()) {
      this.openSubmenu.set(null);
    }
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.openSubmenu.set(null);
  }

  toggleSubmenu(label: string): void {
    this.openSubmenu.update((current) => (current === label ? null : label));
  }

  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}
