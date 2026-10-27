import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-centers-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Nossos Centros</h1>
        <p>Conheça as unidades e projetos que integram o Grupo Cairbar Schutel</p>
      </div>
    </div>

    <div class="container page-content">
      <div class="centers-grid">
        <div class="center-card" *ngFor="let center of centers">
          <div class="center-img-wrap">
            <img [src]="center.image" [alt]="center.name" class="center-logo" />
          </div>
          <div class="center-info">
            <h2>{{ center.name }}</h2>
            <p>{{ center.desc }}</p>
            <a [routerLink]="center.url" class="btn-detail">Conheça o centro</a>
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
    .centers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }
    .center-card {
      background: #fff;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      padding: 30px 24px;
      text-align: center;
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
    }
    .center-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 24px rgba(0, 131, 192, 0.15);
    }
    .center-img-wrap {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
    .center-logo {
      max-height: 80px;
      max-width: 100%;
      object-fit: contain;
    }
    .center-info h2 {
      font-size: 19px;
      color: #0d3c6e;
      margin-bottom: 12px;
    }
    .center-info p {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 20px;
      flex: 1;
    }
    .btn-detail {
      display: inline-block;
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
export class CentersComponent {
  readonly centers = [
    {
      name: 'Lar do Alvorecer Marlene Nobre',
      desc: 'Atendimento social e educacional com creche e atividades extracurriculares em Diadema.',
      image: 'images/centros/lar-do-alvorecer.png',
      url: '/centros/lar-do-alvorecer-marlene-nobre',
    },
    {
      name: 'Centro Educacional Prof. Paulo Rossi Severino',
      desc: 'Formação profissionalizante e apoio socioeducativo a adolescentes e jovens.',
      image: 'images/centros/centro-educacional-prof-paulo-rossi-severino.png',
      url: '/centros/centro-educacional-prof-paulo-rossi-severino',
    },
    {
      name: 'Ambulatório Dr. Bezerra de Menezes',
      desc: 'Atendimento médico e terapêutico voluntário para famílias em vulnerabilidade social.',
      image: 'images/centros/ambulatorio-dr-bezerra-de-menezes.png',
      url: '/centros/ambulatorio-dr-bezerra-de-menezes',
    },
    {
      name: 'Centro de Divulgação Freitas Nobre',
      desc: 'Estudos doutrinários, livraria, palestras e difusão do Espiritismo.',
      image: 'images/centros/centro-de-divulgacao-freitas-nobre.png',
      url: '/centros/centro-de-divulgacao-freitas-nobre',
    },
  ];
}
