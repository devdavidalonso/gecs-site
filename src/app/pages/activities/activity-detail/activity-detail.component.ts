import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-activity-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>{{ activityTitle }}</h1>
        <p>Atividades do Grupo Espírita Cairbar Schutel</p>
      </div>
    </div>

    <div class="container page-content">
      <div class="content-card">
        <h2>Sobre a Atividade</h2>
        <p>
          Esta atividade é aberta à comunidade e tem como objetivo o esclarecimento, a evangelização e o amparo moral e espiritual.
        </p>
        <p>
          Consulte nossa grade de horários para verificar os dias e horários de realização ou entre em contato com nossa equipe.
        </p>

        <div class="action-buttons">
          <a routerLink="/grade-de-horarios" class="btn-primary">Ver Grade de Horários</a>
          <a routerLink="/atividades" class="btn-secondary">Todas as Atividades</a>
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
      font-size: clamp(24px, 4vw, 36px);
      margin-bottom: 12px;
    }
    .page-header p {
      font-size: 18px;
      opacity: 0.9;
      margin: 0;
    }
    .page-content {
      padding: 50px 24px;
      max-width: 900px;
    }
    .content-card {
      background: #fff;
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    }
    .content-card h2 {
      color: #0083c0;
      font-size: 24px;
      margin-bottom: 16px;
    }
    .content-card p {
      color: #444;
      font-size: 16px;
      line-height: 1.7;
    }
    .action-buttons {
      margin-top: 32px;
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
    .btn-primary {
      padding: 12px 28px;
      background: #0083c0;
      color: #fff;
      border-radius: 50px;
      font-weight: 700;
      text-decoration: none;
    }
    .btn-secondary {
      padding: 12px 28px;
      background: #f0f4f8;
      color: #0d3c6e;
      border-radius: 50px;
      font-weight: 700;
      text-decoration: none;
    }
  `]
})
export class ActivityDetailComponent {
  private route = inject(ActivatedRoute);

  get activityTitle(): string {
    const id = this.route.snapshot.paramMap.get('id') || '';
    const titles: Record<string, string> = {
      palestras: 'Nossas Palestras',
      fluidoterapia: 'Fluidoterapia',
      'cursos-doutrinarios': 'Cursos Doutrinários',
      'desenvolvimento-mediunico': 'Desenvolvimento Mediúnico',
      'evangelho-online': 'Evangelho Online',
      'atendimento-fraterno': 'Atendimento Fraterno',
    };
    return titles[id] || 'Atividades';
  }
}
