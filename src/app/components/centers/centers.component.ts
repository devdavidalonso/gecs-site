import {
  Component,
  signal,
  effect,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Center {
  id: string;
  name: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-centers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './centers.component.html',
  styleUrl: './centers.component.css',
})
export class CentersComponent implements AfterViewInit {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;

  readonly centers: Center[] = [
    {
      id: 'lar-do-alvorecer-marlene-nobre',
      name: 'Lar do Alvorecer Marlene Nobre',
      image: 'images/centros/lar-do-alvorecer.png',
      url: '/centros/lar-do-alvorecer-marlene-nobre',
    },
    {
      id: 'centro-de-divulgacao-freitas-nobre',
      name: 'Centro de Divulgação Freitas Nobre',
      image: 'images/centros/centro-de-divulgacao-freitas-nobre.png',
      url: '/centros/centro-de-divulgacao-freitas-nobre',
    },
    {
      id: 'ambulatorio-dr-bezerra-de-menezes',
      name: 'Ambulatório Dr. Bezerra de Menezes',
      image: 'images/centros/ambulatorio-dr-bezerra-de-menezes.png',
      url: '/centros/ambulatorio-dr-bezerra-de-menezes',
    },
    {
      id: 'centro-educacional-prof-paulo-rossi-severino',
      name: 'Centro Educacional Prof. Paulo Rossi Severino',
      image: 'images/centros/centro-educacional-prof-paulo-rossi-severino.png',
      url: '/centros/centro-educacional-prof-paulo-rossi-severino',
    },
  ];

  readonly currentSlide = signal(0);
  readonly slidesToShow = signal(4);
  readonly autoPlay = signal(true);
  readonly autoPlayInterval = signal(6000);
  private autoPlayTimer: ReturnType<typeof setInterval> | null = null;

  ngAfterViewInit(): void {
    this.updateSlidesToShow();
    this.startAutoPlay();
    window.addEventListener('resize', this.updateSlidesToShow.bind(this));
  }

  updateSlidesToShow(): void {
    const width = window.innerWidth;
    if (width <= 480) {
      this.slidesToShow.set(1);
    } else if (width <= 768) {
      this.slidesToShow.set(1);
    } else if (width <= 992) {
      this.slidesToShow.set(2);
    } else if (width <= 1200) {
      this.slidesToShow.set(3);
    } else {
      this.slidesToShow.set(4);
    }
  }

  startAutoPlay(): void {
    if (this.autoPlay()) {
      this.autoPlayTimer = setInterval(() => {
        this.nextSlide();
      }, this.autoPlayInterval());
    }
  }

  stopAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  nextSlide(): void {
    const maxSlide = Math.max(0, this.centers.length - this.slidesToShow());
    this.currentSlide.update((current) =>
      current >= maxSlide ? 0 : current + 1,
    );
  }

  prevSlide(): void {
    const maxSlide = Math.max(0, this.centers.length - this.slidesToShow());
    this.currentSlide.update((current) =>
      current <= 0 ? maxSlide : current - 1,
    );
  }

  goToSlide(index: number): void {
    const maxSlide = Math.max(0, this.centers.length - this.slidesToShow());
    this.currentSlide.set(Math.max(0, Math.min(index, maxSlide)));
  }

  onMouseEnter(): void {
    this.stopAutoPlay();
  }

  onMouseLeave(): void {
    this.startAutoPlay();
  }

  getTransform(): string {
    const slideWidth = 100 / this.slidesToShow();
    const offset = this.currentSlide() * slideWidth;
    return `translateX(-${offset}%)`;
  }

  getVisibleCenters(): Center[] {
    const start = this.currentSlide();
    const end = Math.min(start + this.slidesToShow(), this.centers.length);
    return this.centers.slice(start, end);
  }
}
