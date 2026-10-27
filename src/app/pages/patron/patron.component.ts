import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patron',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Header Banner da Página -->
    <div class="page-banner">
      <div class="banner-container">
        <nav class="breadcrumb" aria-label="Navegação estrutural">
          <a routerLink="/">Início</a> &rsaquo; <span>Nosso Patrono Espiritual</span>
        </nav>
        <h1>Nosso Patrono Espiritual</h1>
        <p class="banner-subtitle">Cairbar Schutel: "humanitário e patriótico cidadão"</p>
      </div>
    </div>

    <div class="patron-page-content">
      <div class="container">
        <div class="patron-grid">
          <div class="patron-text-col">
            <p>
              “Expoente da Verdade e do Amor”, “Pai dos Pobres de Matão”, “Espírita nº 1 do Brasil” e “Bandeirante do Espiritismo”, como era chamado, Cairbar Schutel nasceu no Rio de Janeiro em 22 de setembro de 1868. Era filho de Anthero de Souza Schutel e Rita Tavares Schutel, e desencarnou, em Matão (SP), em 30 de janeiro de 1938, deixando um patrimônio espiritual de valor incalculável.
            </p>

            <p>
              Na pequena cidade de Matão, a figura do farmacêutico era de incontestável importância. Schutel foi escolhido o primeiro intendente do novo município (cargo equivalente ao de prefeito em nossos dias), atuando nos períodos de 1899 e 1900. Com recursos próprios, promoveu a construção do prédio da Câmara Municipal.
            </p>

            <p>
              Debateu pela imprensa, discursou em praça pública sobre os princípios espíritas, escreveu 16 livros, fundou o jornal <em>O Clarim</em> em 1905 e a <em>Revista Internacional de Espiritismo</em> em 1925. Criou também o primeiro programa espírita radiofônico do Brasil em 1936, na Rádio Cultura de Araraquara.
            </p>

            <p>
              Sua casa funcionava como abrigo, hospital e asilo para velhos e crianças desamparadas, vivendo integralmente o espírito do Cristianismo.
            </p>

            <div class="books-box">
              <h3>Principais Obras Publicadas</h3>
              <ul>
                <li><em>Espiritismo e Protestantismo</em> (1911)</li>
                <li><em>Histeria e Fenômenos Psíquicos</em> (1911)</li>
                <li><em>O Diabo e a Igreja</em> (1914)</li>
                <li><em>Médiuns e Mediunidades</em> (1923)</li>
                <li><em>Gênese da Alma</em> (1924)</li>
                <li><em>Parábolas e Ensinos de Jesus</em> (1928)</li>
                <li><em>O Espírito do Cristianismo</em> (1930)</li>
                <li><em>A Vida no Outro Mundo</em> (1932)</li>
              </ul>
            </div>
          </div>

          <div class="patron-img-col">
            <img src="images/sobre/cairbar_no_bg.png" alt="Cairbar Schutel" class="patron-portrait" />
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
      font-size: clamp(30px, 4vw, 44px);
      font-weight: 700;
      color: #fcb942;
      margin: 0 0 12px;
    }
    .banner-subtitle {
      font-size: 20px;
      color: #ffffff;
      margin: 0;
    }

    .patron-page-content {
      background-color: #f9fbfd;
      padding: 60px 0;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .patron-grid {
      display: grid;
      grid-template-columns: 1fr 380px;
      gap: 48px;
      align-items: start;
    }
    .patron-text-col p {
      font-size: 17px;
      line-height: 1.8;
      color: #333333;
      margin-bottom: 20px;
    }

    .books-box {
      margin-top: 36px;
      background: #ffffff;
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      border-left: 4px solid #0083c0;
    }
    .books-box h3 {
      color: #0d3c6e;
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 20px;
    }
    .books-box ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      padding-left: 20px;
      margin: 0;
    }
    .books-box li {
      font-size: 15px;
      color: #444;
    }

    .patron-portrait {
      width: 100%;
      height: auto;
      border-radius: 16px;
      display: block;
    }

    @media (max-width: 900px) {
      .patron-grid {
        grid-template-columns: 1fr;
      }
      .books-box ul {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class PatronComponent {}
