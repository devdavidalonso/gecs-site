import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly columns: FooterColumn[] = [
    {
      title: 'Sobre o Grupo',
      links: [
        { label: 'História e Fundação', href: '/sobre-nos' },
        { label: 'Missão e Valores', href: '/sobre-nos' },
        { label: 'Seja um Voluntário', href: '/quero-ajudar' },
        {
          label: 'Nosso Patrono Espiritual',
          href: '/nosso-patrono-espiritual',
        },
      ],
    },
    {
      title: 'Nossos Centros',
      links: [
        {
          label: 'Lar do Alvorecer Marlene Nobre',
          href: '/centros/lar-do-alvorecer-marlene-nobre',
        },
        {
          label: 'Centro Educacional Prof. Paulo Rossi Severino',
          href: '/centros/centro-educacional-prof-paulo-rossi-severino',
        },
        {
          label: 'Ambulatório Dr. Bezerra de Menezes',
          href: '/centros/ambulatorio-dr-bezerra-de-menezes',
        },
        {
          label: 'Centro de Divulgação Freitas Nobre',
          href: '/centros/centro-de-divulgacao-freitas-nobre',
        },
      ],
    },
    {
      title: 'Eventos e Atividades',
      links: [
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
    {
      title: 'Informações',
      links: [
        { label: 'Grade de Horários', href: '/grade-de-horarios' },
        { label: 'Novidades', href: '/novidades' },
        { label: 'Fale Conosco', href: '/contato' },
        { label: 'Onde Estamos', href: '/contato' },
        { label: 'Política de privacidade', href: '/sobre-nos' },
      ],
    },
  ];

  readonly showGoToTop = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.showGoToTop.set(window.scrollY > 300);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
