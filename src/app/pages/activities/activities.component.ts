import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-activities-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Atividades do Grupo</h1>
        <p>Conheça nossas palestras, passes, cursos doutrinários e reuniões públicas</p>
      </div>
    </div>

    <div class="container page-content">
      <div class="activities-grid">
        <div class="activity-card" *ngFor="let act of activities">
          <div class="activity-img-wrap">
            <img [src]="act.image" [alt]="act.title" class="activity-img" />
          </div>
          <div class="activity-info">
            <h2>{{ act.title }}</h2>
            <p>{{ act.desc }}</p>
            <a [routerLink]="act.url" class="btn-detail">Saiba mais</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-header {
      background: linear-gradient(135deg, #0d3c6e 0%, #0083c0 100%);
      color: #fff;
      padding: 60px 0 40px;
      text-align: center;
    }
    .page-header h1 {
      color: #fff;
      font-size: clamp(28px, 4vw, 40px);
      margin-bottom: 12px;
    }
    .page-header p {
      font-size: 18px;
      opacity: 0.9;
      margin: 0;
    }
    .page-content {
      padding: 50px 24px;
    }
    .activities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }
    .activity-card {
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
      display: flex;
      flex-direction: column;
      border: 1px solid #e2e8f0;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .activity-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 24px rgba(0, 131, 192, 0.15);
    }
    .activity-img-wrap {
      height: 200px;
      overflow: hidden;
    }
    .activity-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .activity-info {
      padding: 24px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .activity-info h2 {
      font-size: 20px;
      color: #0d3c6e;
      margin-bottom: 10px;
    }
    .activity-info p {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 20px;
      flex: 1;
    }
    .btn-detail {
      display: inline-block;
      align-self: flex-start;
      padding: 10px 24px;
      background: #0083c0;
      color: #fff;
      border-radius: 50px;
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
      transition: background 0.25s;
    }
    .btn-detail:hover {
      background: #006ba1;
    }
  `]
})
export class ActivitiesComponent {
  readonly activities = [
    {
      title: 'Nossas Palestras',
      desc: 'Palestras públicas presenciais e transmitidas com temas evangélicos e doutrinários.',
      image: 'images/atividades/palestras.png',
      url: '/atividades/palestras',
    },
    {
      title: 'Fluidoterapia',
      desc: 'Tratamento de passes e água fluidificada para fortalecimento físico e espiritual.',
      image: 'images/atividades/fluidoterapia.png',
      url: '/atividades/fluidoterapia',
    },
    {
      title: 'Cursos Doutrinários',
      desc: 'Estudo sistematizado das obras básicas de Allan Kardec e obras complementares.',
      image: 'images/atividades/cursos-doutrinarios.png',
      url: '/atividades/cursos-doutrinarios',
    },
    {
      title: 'Desenvolvimento Mediúnico',
      desc: 'Formação, esclarecimento e prática mediúnica à luz do Evangelho de Jesus.',
      image: 'images/atividades/desenvolvimento-mediunico.png',
      url: '/atividades/desenvolvimento-mediunico',
    },
    {
      title: 'Evangelho Online',
      desc: 'Transmissões e reuniões virtuais para oração e reflexão no lar.',
      image: 'images/atividades/evangelho-online.png',
      url: '/atividades/evangelho-online',
    },
    {
      title: 'Atendimento Fraterno',
      desc: 'Acolhimento individual e fraterno para orientação e conforto espiritual.',
      image: 'images/atividades/atendimento-fraterno.png',
      url: '/atividades/atendimento-fraterno',
    },
  ];
}
