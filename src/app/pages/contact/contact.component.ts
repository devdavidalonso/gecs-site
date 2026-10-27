import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Fale Conosco</h1>
        <p>Estamos à disposição para dúvidas, informações, orientações e visitas</p>
      </div>
    </div>

    <div class="container page-content">
      <div class="contact-grid">
        <div class="contact-info-card">
          <h2>Informações de Contato</h2>
          <div class="info-item">
            <h3>Endereço</h3>
            <p>Rua dos Espiritistas, São Paulo / Diadema - SP</p>
          </div>
          <div class="info-item">
            <h3>E-mail</h3>
            <p>contato&#64;gecairbarschutel.org.br</p>
          </div>
          <div class="info-item">
            <h3>Redes Sociais</h3>
            <p>Facebook, Instagram e YouTube: &#64;gecairbarschutel</p>
          </div>
        </div>

        <div class="contact-form-card">
          <h2>Envie uma Mensagem</h2>
          <form (submit)="onSubmit($event)">
            <div class="form-group">
              <label for="name">Nome completo</label>
              <input type="text" id="name" name="name" required placeholder="Seu nome" />
            </div>
            <div class="form-group">
              <label for="email">E-mail</label>
              <input type="email" id="email" name="email" required placeholder="seu@email.com" />
            </div>
            <div class="form-group">
              <label for="subject">Assunto</label>
              <input type="text" id="subject" name="subject" required placeholder="Assunto da mensagem" />
            </div>
            <div class="form-group">
              <label for="message">Mensagem</label>
              <textarea id="message" name="message" rows="4" required placeholder="Escreva sua mensagem..."></textarea>
            </div>
            <button type="submit" class="btn-submit">Enviar Mensagem</button>
            <p *ngIf="sent" class="success-msg">Mensagem enviada com sucesso! Em breve retornaremos.</p>
          </form>
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
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 40px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .contact-info-card, .contact-form-card {
      background: #fff;
      border-radius: 12px;
      padding: 36px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    }
    .contact-info-card h2, .contact-form-card h2 {
      color: #0083c0;
      font-size: 22px;
      margin-bottom: 24px;
    }
    .info-item {
      margin-bottom: 24px;
    }
    .info-item h3 {
      font-size: 16px;
      color: #0d3c6e;
      margin-bottom: 6px;
    }
    .info-item p {
      color: #555;
      font-size: 15px;
      margin: 0;
    }
    .form-group {
      margin-bottom: 18px;
    }
    .form-group label {
      display: block;
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 6px;
    }
    .form-group input, .form-group textarea {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #d2d6dc;
      border-radius: 8px;
      font-size: 15px;
      font-family: inherit;
      box-sizing: border-box;
    }
    .form-group input:focus, .form-group textarea:focus {
      outline: none;
      border-color: #0083c0;
      box-shadow: 0 0 0 3px rgba(0, 131, 192, 0.15);
    }
    .btn-submit {
      width: 100%;
      padding: 14px;
      background: #0083c0;
      color: #fff;
      border: none;
      border-radius: 50px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.25s;
    }
    .btn-submit:hover {
      background: #006ba1;
    }
    .success-msg {
      margin-top: 16px;
      color: #2e7d32;
      font-weight: 600;
      text-align: center;
    }
  `]
})
export class ContactComponent {
  sent = false;

  onSubmit(e: Event): void {
    e.preventDefault();
    this.sent = true;
  }
}
