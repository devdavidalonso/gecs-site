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

interface Activity {
  id: string;
  title: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css',
})
export class ActivitiesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;

  readonly activities: Activity[] = [
    {
      id: 'palestras',
      title: 'Nossas Palestras',
      image: 'images/atividades/palestras.png',
      url: '/atividades/palestras',
    },
    {
      id: 'fluidoterapia',
      title: 'Fluidoterapia',
      image: 'images/atividades/fluidoterapia.png',
      url: '/atividades/fluidoterapia',
    },
    {
      id: 'cursos-doutrinarios',
      title: 'Cursos Doutrinários',
      image: 'images/atividades/cursos-doutrinarios.png',
      url: '/atividades/cursos-doutrinarios',
    },
    {
      id: 'desenvolvimento-mediunico',
      title: 'Desenvolvimento mediúnico',
      image: 'images/atividades/desenvolvimento-mediunico.png',
      url: '/atividades/desenvolvimento-mediunico',
    },
    {
      id: 'evangelho-online',
      title: 'Evangelho Online',
      image: 'images/atividades/evangelho-online.png',
      url: '/atividades/evangelho-online',
    },
    {
      id: 'atendimento-fraterno',
      title: 'Atendimento Fraterno',
      image: 'images/atividades/atendimento-fraterno.png',
      url: '/atividades/atendimento-fraterno',
    },
  ];

  readonly currentSlide = signal(0);
  readonly slidesToShow = signal(5);
  private autoPlayTimer: ReturnType<typeof setInterval> | null = null;
  private resizeListener = () => this.updateSlidesToShow();

  ngAfterViewInit(): void {
    this.updateSlidesToShow();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
    window.removeEventListener('resize', this.resizeListener);
  }

  updateSlidesToShow(): void {
    const width = window.innerWidth;
    if (width <= 576) {
      this.slidesToShow.set(1);
    } else if (width <= 768) {
      this.slidesToShow.set(2);
    } else if (width <= 992) {
      this.slidesToShow.set(3);
    } else if (width <= 1200) {
      this.slidesToShow.set(4);
    } else {
      this.slidesToShow.set(5);
    }
  }

  maxSlide(): number {
    return Math.max(0, this.activities.length - this.slidesToShow());
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

  onMouseEnter(): void {
    this.stopAutoPlay();
  }

  onMouseLeave(): void {
    // Optional autoplay resumption
  }

  startAutoPlay(): void {
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  getTransform(): string {
    const percentPerSlide = 100 / this.slidesToShow();
    const offset = this.currentSlide() * percentPerSlide;
    return `translateX(-${offset}%)`;
  }
}
