import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-center-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>{{ centerName }}</h1>
        <p>Unidade do Grupo Espírita Cairbar Schutel</p>
      </div>
    </div>

    <div class="container page-content">
      <div class="content-card">
        <h2>Sobre a Unidade</h2>
        <p>
          Esta unidade desenvolve atividades contínuas de acolhimento, educação, assistência e estudo doutrinário, beneficiando a comunidade local.
        </p>
        <p>
          Para saber mais sobre horários de atendimento, matrículas e projetos, entre em contato com nossa equipe.
        </p>

        <div class="action-buttons">
          <a routerLink="/contato" class="btn-primary">Entre em contato</a>
          <a routerLink="/centros" class="btn-secondary">Ver todos os centros</a>
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
export class CenterDetailComponent {
  private route = inject(ActivatedRoute);

  get centerName(): string {
    const id = this.route.snapshot.paramMap.get('id') || '';
    const names: Record<string, string> = {
      'lar-do-alvorecer-marlene-nobre': 'Lar do Alvorecer Marlene Nobre',
      'centro-educacional-prof-paulo-rossi-severino': 'Centro Educacional Prof. Paulo Rossi Severino',
      'ambulatorio-dr-bezerra-de-menezes': 'Ambulatório Dr. Bezerra de Menezes',
      'centro-de-divulgacao-freitas-nobre': 'Centro de Divulgação Freitas Nobre',
    };
    return names[id] || 'Nossos Centros';
  }
}
