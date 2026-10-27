import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ScheduleRow {
  day: string;
  time: string;
  activity: string;
  responsible: string;
  bgClass: string;
}

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Header Banner da Página -->
    <div class="page-banner">
      <div class="banner-container">
        <nav class="breadcrumb" aria-label="Navegação estrutural">
          <a routerLink="/">Início</a> &rsaquo; <span>Grade de Horários</span>
        </nav>
        <h1>Grade de Horários da Casa Cairbar Schutel</h1>
        <p class="banner-subtitle">Confira abaixo nossa programação semanal detalhada de atividades, palestras e reuniões.</p>
      </div>
    </div>

    <div class="horarios-page-content">
      <div class="container">
        <div class="schedule-card">
          <div class="table-responsive">
            <table class="schedule-table">
              <thead>
                <tr>
                  <th>Dia da semana</th>
                  <th>Horário</th>
                  <th>Atividade</th>
                  <th>Responsável</th>
                </tr>
              </thead>
              <tbody>
                @for (item of schedule; track item.activity + item.time) {
                  <tr [class]="item.bgClass">
                    <td class="day-cell"><strong>{{ item.day }}</strong></td>
                    <td class="time-cell">{{ item.time }}</td>
                    <td class="activity-cell">{{ item.activity }}</td>
                    <td class="responsible-cell">{{ item.responsible }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-banner {
      background: linear-gradient(135deg, #054974 0%, #0997CF 100%);
      color: #ffffff;
      padding: 60px 0 50px;
      text-align: center;
    }
    .banner-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .breadcrumb {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 16px;
    }
    .breadcrumb a {
      color: #ffffff;
      text-decoration: none;
    }
    .page-banner h1 {
      font-size: clamp(28px, 4vw, 42px);
      font-weight: 700;
      color: #fcb942;
      margin: 0 0 12px;
    }
    .banner-subtitle {
      font-size: 18px;
      color: #ffffff;
      margin: 0;
    }

    .horarios-page-content {
      background-color: #f9fbfd;
      padding: 60px 0;
    }
    .container {
      max-width: 1140px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .schedule-card {
      background: #ffffff;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 6px 24px rgba(0,0,0,0.06);
    }

    .table-responsive {
      overflow-x: auto;
    }

    .schedule-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }

    .schedule-table th {
      background-color: #0083c0;
      color: #ffffff;
      padding: 16px 20px;
      font-size: 16px;
      font-weight: 700;
    }

    .schedule-table td {
      padding: 14px 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      font-size: 15px;
      color: #333333;
    }

    /* Linhas por Dia */
    .row-segunda { background-color: #ffebee; }
    .row-terca { background-color: #fff3e0; }
    .row-quarta { background-color: #e8f5e9; }
    .row-quinta { background-color: #e3f2fd; }
    .row-sexta { background-color: #fff9c4; }
    .row-sabado { background-color: #eddce8; }

    @media (max-width: 768px) {
      .schedule-card {
        padding: 12px;
      }
      .schedule-table th, .schedule-table td {
        padding: 10px 12px;
        font-size: 14px;
      }
    }
  `]
})
export class HorariosComponent {
  readonly schedule: ScheduleRow[] = [
    // Segunda-feira
    { day: 'Segunda-feira', time: '19:00 às 19:50', activity: 'Entrevista e triagem para consulta pela psicografia', responsible: 'Silvana e Equipe Conrado', bgClass: 'row-segunda' },
    { day: 'Segunda-feira', time: '19:50 às 20:00', activity: 'Esclarecimentos gerais sobre psicografia', responsible: 'Waltinho e Equipe', bgClass: 'row-segunda' },
    { day: 'Segunda-feira', time: '20:00 às 20:30', activity: 'Preleção evangélica', responsible: 'Conrado e Equipe', bgClass: 'row-segunda' },
    { day: 'Segunda-feira', time: '20:00 às 21:00', activity: 'Evangelização infantil', responsible: 'Amanda e Equipe', bgClass: 'row-segunda' },
    { day: 'Segunda-feira', time: '20:30 às 22:00', activity: 'Preleção evangélica', responsible: 'Bruno e Equipe', bgClass: 'row-segunda' },
    { day: 'Segunda-feira', time: '20:30 às 22:00', activity: 'Fluidoterapia especial', responsible: 'Maria Helena e Equipe', bgClass: 'row-segunda' },
    { day: 'Segunda-feira', time: '20:30 às 22:00', activity: 'Fluidoterapia', responsible: 'Glemar e Equipe', bgClass: 'row-segunda' },

    // Terça-feira
    { day: 'Terça-feira', time: '17:30 às 18:00', activity: 'Estudo da Doutrina espírita', responsible: 'Odair e Equipe', bgClass: 'row-terca' },
    { day: 'Terça-feira', time: '18:00 às 19:00', activity: 'Reunião mediúnica (03 salas)', responsible: 'Magali, Odair e Juninho', bgClass: 'row-terca' },
    { day: 'Terça-feira', time: '19:00 às 19:30', activity: 'Grupo de estudo sobre mediunidade', responsible: 'Waltinho, Odair e Equipe', bgClass: 'row-terca' },
    { day: 'Terça-feira', time: '19:30 às 21:00', activity: 'Reunião mediúnica (04 salas)', responsible: 'Magali, João, Silvana e Juninho', bgClass: 'row-terca' },

    // Quarta-feira
    { day: 'Quarta-feira', time: '14:00 às 16:00', activity: 'Preleção e Reunião Mediúnica', responsible: 'Magali, Sebastião, Isabele e Equipe', bgClass: 'row-quarta' },
    { day: 'Quarta-feira', time: '19:00 às 20:00', activity: 'Reunião mediúnica (AME-SP)', responsible: 'Waltinho e Equipe', bgClass: 'row-quarta' },
    { day: 'Quarta-feira', time: '19:00 às 20:00', activity: 'Preleção evangélica', responsible: 'Toninho, Solange e Equipe', bgClass: 'row-quarta' },
    { day: 'Quarta-feira', time: '20:00 às 20:30', activity: 'Fluidoterapia especial', responsible: 'Waltinho, Conrado e Equipe', bgClass: 'row-quarta' },
    { day: 'Quarta-feira', time: '20:30 às 22:00', activity: 'Reunião mediúnica (02 salas)', responsible: 'Odair, Silvana e Equipes', bgClass: 'row-quarta' },

    // Quinta-feira
    { day: 'Quinta-feira', time: '19:00 às 20:00', activity: 'Grupo de estudo sobre mediunidade', responsible: 'AME São Paulo e Equipe', bgClass: 'row-quinta' },
    { day: 'Quinta-feira', time: '20:00 às 21:30', activity: 'Reunião mediúnica (04 salas)', responsible: 'Maida, Juninho, Hugo e Odair', bgClass: 'row-quinta' },
    { day: 'Quinta-feira', time: '20:00 às 21:00', activity: 'Preleção e Fluidoterapia especial', responsible: 'Conrado e Equipe', bgClass: 'row-quinta' },

    // Sexta-feira
    { day: 'Sexta-feira', time: '18:00 às 19:50', activity: 'Estudo da Doutrina Espírita e Reunião de desenvolvimento mediúnico', responsible: 'Magali e Equipe', bgClass: 'row-sexta' },

    // Sábado
    { day: 'Sábado', time: '09:30 às 10:00', activity: 'Estudo da Doutrina Espírita', responsible: 'Saulinho e Equipe (Diadema)', bgClass: 'row-sabado' },
    { day: 'Sábado', time: '10:00 às 11:00', activity: 'Reunião de desenvolvimento mediúnico', responsible: 'Saulinho e Equipe (Diadema)', bgClass: 'row-sabado' },
    { day: 'Sábado', time: '15:00 às 18:00', activity: 'Preleção evangélica', responsible: 'Belisardo e Equipe (Diadema)', bgClass: 'row-sabado' },
    { day: 'Sábado', time: '15:00 às 18:00', activity: 'Fluidoterapia', responsible: 'Almir, Belisardo e Equipe (Diadema)', bgClass: 'row-sabado' },
    { day: 'Sábado', time: '18:00 às 19:30', activity: 'Preleção evangélica', responsible: 'Waltinho e Equipe (São Paulo)', bgClass: 'row-sabado' },
    { day: 'Sábado', time: '18:00 às 19:30', activity: 'Fluidoterapia', responsible: 'Serena e Equipe (São Paulo)', bgClass: 'row-sabado' }
  ];
}
