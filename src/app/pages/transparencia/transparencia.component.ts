import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface DocumentItem {
  title: string;
  filesCount: number;
  size: string;
  url: string;
}

@Component({
  selector: 'app-transparencia',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Header Banner da Página -->
    <div class="page-banner">
      <div class="banner-container">
        <nav class="breadcrumb" aria-label="Navegação estrutural">
          <a routerLink="/">Início</a> &rsaquo; <span>Transparência</span>
        </nav>
        <h1>Transparência</h1>
        <p class="banner-subtitle">
          O Grupo Espírita Cairbar Schutel acredita que a transparência é fundamental para a construção de uma relação de confiança com seus apoiadores.
        </p>
      </div>
    </div>

    <div class="transparencia-page-content">
      <div class="container">
        <div class="intro-box">
          <p>
            Nesta página, você encontrará diversos documentos que comprovam a seriedade e o compromisso da instituição com a gestão responsável e eficiente dos recursos doados.
          </p>
          <p><strong>A seguir, estão disponíveis para consulta:</strong></p>
        </div>

        <!-- Seção Balanço -->
        <section class="doc-section">
          <h2>Balanço</h2>
          <div class="empty-docs">
            <p>Nenhum documento recente encontrado nesta categoria.</p>
          </div>
        </section>

        <!-- Seção Estatuto -->
        <section class="doc-section">
          <h2>Estatuto</h2>
          <div class="doc-list">
            @for (doc of estatutos; track doc.title) {
              <div class="doc-card">
                <div class="doc-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e53e3e" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div class="doc-info">
                  <h3>{{ doc.title }}</h3>
                  <div class="doc-meta">
                    <span>📄 {{ doc.filesCount }} arquivo(s)</span>
                    <span>💾 {{ doc.size }}</span>
                  </div>
                </div>
                <a [href]="doc.url" target="_blank" class="download-btn">Download</a>
              </div>
            }
          </div>
        </section>

        <!-- Seção Relatório de Atividades -->
        <section class="doc-section">
          <h2>Relatório de Atividades</h2>
          <div class="doc-list">
            @for (doc of relatorios; track doc.title) {
              <div class="doc-card">
                <div class="doc-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e53e3e" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div class="doc-info">
                  <h3>{{ doc.title }}</h3>
                  <div class="doc-meta">
                    <span>📄 {{ doc.filesCount }} arquivo(s)</span>
                    <span>💾 {{ doc.size }}</span>
                  </div>
                </div>
                <a [href]="doc.url" target="_blank" class="download-btn">Download</a>
              </div>
            }
          </div>
        </section>
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
      font-size: clamp(30px, 4vw, 44px);
      font-weight: 700;
      color: #fcb942;
      margin: 0 0 12px;
    }
    .banner-subtitle {
      font-size: 18px;
      color: #ffffff;
      max-width: 900px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .transparencia-page-content {
      background-color: #f9fbfd;
      padding: 60px 0;
    }
    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .intro-box {
      background: #ffffff;
      border-radius: 12px;
      padding: 28px 32px;
      margin-bottom: 40px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.05);
      border-left: 4px solid #0083c0;
    }
    .intro-box p {
      font-size: 16px;
      line-height: 1.7;
      color: #444444;
      margin: 0 0 12px;
    }
    .intro-box p:last-child {
      margin-bottom: 0;
    }

    .doc-section {
      margin-bottom: 44px;
    }
    .doc-section h2 {
      font-size: 26px;
      font-weight: 700;
      color: #0083c0;
      margin-bottom: 20px;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 8px;
    }

    .empty-docs {
      background: #ffffff;
      padding: 20px 24px;
      border-radius: 8px;
      color: #718096;
      font-style: italic;
    }

    .doc-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .doc-card {
      background: #ffffff;
      border-radius: 12px;
      padding: 20px 24px;
      display: flex;
      align-items: center;
      gap: 20px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }
    .doc-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .doc-icon {
      flex-shrink: 0;
    }
    .doc-info {
      flex: 1;
    }
    .doc-info h3 {
      font-size: 18px;
      font-weight: 700;
      color: #0d3c6e;
      margin: 0 0 6px;
    }
    .doc-meta {
      display: flex;
      gap: 16px;
      font-size: 14px;
      color: #718096;
    }
    .download-btn {
      display: inline-block;
      padding: 10px 24px;
      background: #0083c0;
      color: #ffffff;
      font-weight: 700;
      border-radius: 6px;
      text-decoration: none;
      transition: background 0.25s;
      flex-shrink: 0;
    }
    .download-btn:hover {
      background: #006ba1;
    }

    @media (max-width: 600px) {
      .doc-card {
        flex-direction: column;
        align-items: flex-start;
      }
      .download-btn {
        width: 100%;
        text-align: center;
      }
    }
  `]
})
export class TransparenciaComponent {
  readonly estatutos: DocumentItem[] = [
    {
      title: 'Estatuto GECS 2017',
      filesCount: 1,
      size: '3.96 MB',
      url: 'https://gecairbarschutel.org.br/download/estatuto-gecs-2017/'
    }
  ];

  readonly relatorios: DocumentItem[] = [
    {
      title: 'Relatório de Atividades 2023',
      filesCount: 1,
      size: '1.71 MB',
      url: 'https://gecairbarschutel.org.br/download/relatorio-de-atividades-2023/'
    },
    {
      title: 'Relatório de Atividades 2022',
      filesCount: 1,
      size: '6.06 MB',
      url: 'https://gecairbarschutel.org.br/download/relatorio-de-atividades-2022/'
    },
    {
      title: 'Relatório de Atividades 2021',
      filesCount: 1,
      size: '7.54 MB',
      url: 'https://gecairbarschutel.org.br/download/relatorio-de-atividades-2021/'
    }
  ];
}
