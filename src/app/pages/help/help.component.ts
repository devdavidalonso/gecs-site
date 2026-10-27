import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Quero Ajudar</h1>
        <p>Faça parte dessa corrente de amor e solidariedade</p>
      </div>
    </div>

    <div class="container page-content">
      <div class="help-grid">
        <div class="help-card highlight">
          <div class="icon-wrap">💛</div>
          <h2>Seja um Amigo do GECS</h2>
          <p>
            Contribua mensalmente com qualquer valor e ajude a manter as atividades sociais, alimentação de centenas de crianças e assistência médica e educacional em Diadema.
          </p>
          <div class="pix-box">
            <span>Chave PIX (CNPJ):</span>
            <strong>contato&#64;gecairbarschutel.org.br</strong>
          </div>
        </div>

        <div class="help-card">
          <div class="icon-wrap">🤝</div>
          <h2>Seja um Voluntário</h2>
          <p>
            Doe seu tempo e talento nas áreas de assistência social, evangelização, apoio administrativo, bazar, eventos ou saúde no Ambulatório Dr. Bezerra de Menezes.
          </p>
          <p style="margin-top: 16px; font-weight: 600; color: #0083c0;">
            Entre em contato pelo e-mail ou visite uma de nossas unidades!
          </p>
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
    .help-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 30px;
      max-width: 900px;
      margin: 0 auto;
    }
    .help-card {
      background: #fff;
      border-radius: 12px;
      padding: 36px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      border: 1px solid #e2e8f0;
      display: flex;
      flex-direction: column;
    }
    .help-card.highlight {
      border-color: #fcb942;
      box-shadow: 0 6px 24px rgba(252, 185, 66, 0.18);
    }
    .icon-wrap {
      font-size: 36px;
      margin-bottom: 16px;
    }
    .help-card h2 {
      color: #0d3c6e;
      font-size: 22px;
      margin-bottom: 14px;
    }
    .help-card p {
      color: #555;
      font-size: 15px;
      line-height: 1.6;
      margin: 0;
    }
    .pix-box {
      margin-top: 24px;
      background: #eff1ec;
      padding: 16px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .pix-box span {
      font-size: 13px;
      color: #666;
    }
    .pix-box strong {
      color: #0d3c6e;
      font-size: 16px;
      word-break: break-all;
    }
  `]
})
export class HelpComponent {}
