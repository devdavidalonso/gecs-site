import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Novidades e Eventos</h1>
        <p>Acompanhe as últimas notícias, publicações e comunicados do GECS</p>
      </div>
    </div>

    <div class="container page-content">
      <div class="news-grid">
        <article class="news-item" *ngFor="let item of news">
          <div class="img-wrap">
            <span class="badge">{{ item.category }}</span>
            <img [src]="item.image" [alt]="item.title" />
          </div>
          <div class="news-body">
            <h2>{{ item.title }}</h2>
            <time>{{ item.date }}</time>
          </div>
        </article>
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
    .news-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 30px;
    }
    .news-item {
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
      display: flex;
      flex-direction: column;
    }
    .img-wrap {
      position: relative;
      height: 220px;
      background: #eee;
    }
    .img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .badge {
      position: absolute;
      top: 12px;
      left: 12px;
      background: #0083c0;
      color: #fff;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      z-index: 2;
    }
    .news-body {
      padding: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .news-body h2 {
      font-size: 18px;
      color: #0d3c6e;
      line-height: 1.4;
      margin-bottom: 12px;
    }
    .news-body time {
      font-size: 13px;
      color: #888;
      margin-top: auto;
    }
  `]
})
export class NewsComponent {
  readonly news = [
    {
      title: 'Evangelização Espírita Infantil e Juvenil: novo horário acolhe crianças, jovens e famílias',
      date: '30 de junho de 2026',
      category: 'Grupo de Estudos',
      image: 'images/novidades/evangelizacao-infantil.jpg',
    },
    {
      title: 'Seja um Amigo do GECS e Ajude a Transformar Vidas',
      date: '12 de janeiro de 2026',
      category: 'Ações Solidárias',
      image: 'images/novidades/amigo-do-gecs.jpg',
    },
    {
      title: 'Seja um Amigo do GECS: Doe Mensalmente e Transforme Vidas em Diadema',
      date: '28 de abril de 2025',
      category: 'Ações Solidárias',
      image: 'images/novidades/voluntarios.jpg',
    },
    {
      title: 'As Sete Portas da Alma: autoconhecimento à luz do Espiritismo',
      date: '15 de fevereiro de 2025',
      category: 'Livros e Publicações',
      image: 'images/novidades/sete-portas-da-alma.jpg',
    },
    {
      title: 'Dra. Marlene Nobre: 10 anos de saudade e gratidão',
      date: '10 de janeiro de 2025',
      category: 'GECS',
      image: 'images/novidades/marlene-10-anos.jpg',
    },
    {
      title: 'Sucesso da Ação de Natal do Grupo Espírita Cairbar Schutel: Solidariedade que Transforma Vidas!',
      date: '17 de dezembro de 2024',
      category: 'Ações Solidárias',
      image: 'images/novidades/presencial-e-online.jpg',
    },
  ];
}
