import {
  Component,
  signal,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  categorySlug: string;
  excerpt?: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-novidades',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './novidades.component.html',
  styleUrl: './novidades.component.css',
})
export class NovidadesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;

  readonly news: NewsItem[] = [
    {
      id: 'evangelizacao-infantil',
      title:
        'Evangelização Espírita Infantil e Juvenil: novo horário acolhe crianças, jovens e famílias',
      date: '30 de junho de 2026',
      category: 'Grupo de Estudos',
      categorySlug: 'grupo-de-estudos',
      image: 'images/novidades/evangelizacao-infantil.jpg',
      url: '/novidades',
    },
    {
      id: 'amigo-do-gecs-transformar',
      title: 'Seja um Amigo do GECS e Ajude a Transformar Vidas',
      date: '12 de janeiro de 2026',
      category: 'Ações Solidárias',
      categorySlug: 'acoes-solidarias',
      image: 'images/novidades/amigo-do-gecs.jpg',
      url: '/novidades',
    },
    {
      id: 'amigo-do-gecs-diadema',
      title:
        'Seja um Amigo do GECS: Doe Mensalmente e Transforme Vidas em Diadema',
      date: '28 de abril de 2025',
      category: 'Ações Solidárias',
      categorySlug: 'acoes-solidarias',
      image: 'images/novidades/voluntarios.jpg',
      url: '/novidades',
    },
    {
      id: 'sete-portas-da-alma',
      title: 'As Sete Portas da Alma: autoconhecimento à luz do Espiritismo',
      date: '15 de fevereiro de 2025',
      category: 'Livros e Publicações',
      categorySlug: 'livros-e-publicacoes',
      image: 'images/novidades/sete-portas-da-alma.jpg',
      url: '/novidades',
    },
    {
      id: 'marlene-10-anos',
      title: 'Dra. Marlene Nobre: 10 anos de saudade e gratidão',
      date: '10 de janeiro de 2025',
      category: 'GECS',
      categorySlug: 'gecs',
      image: 'images/novidades/marlene-10-anos.jpg',
      url: '/novidades',
    },
    {
      id: 'acao-natal',
      title:
        'Sucesso da Ação de Natal do Grupo Espírita Cairbar Schutel: Solidariedade que Transforma Vidas!',
      date: '17 de dezembro de 2024',
      category: 'Ações Solidárias',
      categorySlug: 'acoes-solidarias',
      image: 'images/novidades/presencial-e-online.jpg',
      url: '/novidades',
    },
  ];

  readonly currentSlide = signal(0);
  readonly slidesToShow = signal(3);
  private resizeListener = () => this.updateSlidesToShow();

  ngAfterViewInit(): void {
    this.updateSlidesToShow();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeListener);
  }

  updateSlidesToShow(): void {
    const width = window.innerWidth;
    if (width <= 640) {
      this.slidesToShow.set(1);
    } else if (width <= 992) {
      this.slidesToShow.set(2);
    } else {
      this.slidesToShow.set(3);
    }
  }

  maxSlide(): number {
    return Math.max(0, this.news.length - this.slidesToShow());
  }

  nextSlide(): void {
    this.currentSlide.update((current) =>
      current >= this.maxSlide() ? 0 : current + 1,
    );
  }

  prevSlide(): void {
    this.currentSlide.update((current) =>
      current <= 0 ? this.maxSlide() : current - 1,
    );
  }

  goToSlide(index: number): void {
    this.currentSlide.set(Math.min(index, this.maxSlide()));
  }

  getTransform(): string {
    const percentPerSlide = 100 / this.slidesToShow();
    const offset = this.currentSlide() * percentPerSlide;
    return `translateX(-${offset}%)`;
  }
}
