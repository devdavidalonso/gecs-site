import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="not-found-container">
      <div class="content-card">
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>A página que você procura não existe ou foi movida.</p>
        <a routerLink="/" class="btn-home">Voltar para a Página Inicial</a>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      min-height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 60px 24px;
      background: #eff1ec;
    }
    .content-card {
      background: #fff;
      border-radius: 12px;
      padding: 50px 40px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      max-width: 500px;
      width: 100%;
    }
    h1 {
      font-size: 72px;
      color: #0083c0;
      margin: 0 0 10px;
      line-height: 1;
    }
    h2 {
      font-size: 22px;
      color: #0d3c6e;
      margin-bottom: 12px;
    }
    p {
      color: #666;
      font-size: 15px;
      margin-bottom: 28px;
    }
    .btn-home {
      display: inline-block;
      padding: 12px 30px;
      background: #0083c0;
      color: #fff;
      border-radius: 50px;
      font-weight: 700;
      text-decoration: none;
      transition: background 0.25s;
    }
    .btn-home:hover {
      background: #006ba1;
    }
  `]
})
export class NotFoundComponent {}
