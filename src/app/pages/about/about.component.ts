import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Founder {
  id: string;
  name: string;
  image: string;
  bio: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Header Banner da Página -->
    <div class="page-banner">
      <div class="banner-container">
        <nav class="breadcrumb" aria-label="Navegação estrutural">
          <a routerLink="/">Início</a> &rsaquo; <span>Sobre Nós</span>
        </nav>
        <h1>Sobre o Grupo Espírita Cairbar Schutel</h1>
        <p class="banner-subtitle">Conheça nossa história, fundadores, propósito, valores e diretoria</p>
      </div>
    </div>

    <div class="about-page-content">
      <!-- Seção Nossos Fundadores -->
      <section class="founders-section">
        <div class="container">
          <h2 class="section-title">Nossos Fundadores</h2>

          <!-- Abas dos Fundadores -->
          <div class="founders-tabs" role="tablist">
            @for (founder of founders; track founder.id) {
              <button
                class="tab-btn"
                [class.active]="activeFounderId() === founder.id"
                (click)="activeFounderId.set(founder.id)"
                role="tab"
                [attr.aria-selected]="activeFounderId() === founder.id"
              >
                {{ founder.name }}
              </button>
            }
          </div>

          <!-- Conteúdo do Fundador Selecionado -->
          <div class="founder-card-content">
            @for (founder of founders; track founder.id) {
              @if (activeFounderId() === founder.id) {
                <div class="founder-grid">
                  <div class="founder-img-col">
                    <img [src]="founder.image" [alt]="founder.name" class="founder-img" />
                  </div>
                  <div class="founder-text-col">
                    <h3>{{ founder.name }}</h3>
                    @for (paragraph of founder.bio; track paragraph) {
                      <p>{{ paragraph }}</p>
                    }
                  </div>
                </div>
              }
            }
          </div>
        </div>
      </section>

      <!-- Galeria Histórica -->
      <section class="gallery-section">
        <div class="container">
          <h2 class="section-title">Nossa Trajetória</h2>
          <div class="gallery-grid">
            @for (img of galleryImages; track img) {
              <div class="gallery-item">
                <img [src]="img" alt="GECS Histórico" loading="lazy" />
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Nosso Propósito e Valores -->
      <section class="purpose-values-section">
        <div class="container">
          <div class="purpose-grid">
            <div class="purpose-img-col">
              <img src="images/sobre/proposito.webp" alt="Grupo Espírita Cairbar Schutel" class="purpose-img" />
            </div>
            <div class="purpose-text-col">
              <div class="purpose-block">
                <h2>Nosso Propósito</h2>
                <p>
                  Nosso propósito é contribuir para a evolução e construção de uma sociedade mais amorosa e justa, com a promoção da fraternidade, da solidariedade e da compreensão espiritual a partir da vivência, dos princípios e dos ensinamentos da Doutrina Espírita.
                </p>
              </div>

              <div class="values-block">
                <h2>Nossos Valores</h2>
                <p class="values-text">
                  Amor, solidariedade, fraternidade, caridade, respeito, humildade, comprometimento, ética e busca constante pela transformação moral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Diretoria e Colaboradores -->
      <section class="board-staff-section">
        <div class="container">
          <div class="board-staff-grid">
            <div class="board-box">
              <h2>Diretoria do Grupo</h2>
              <ul class="board-list">
                <li><strong>Walther Graciano Júnior</strong> – Presidente</li>
                <li><strong>Magali Abujade</strong> – Vice-presidente</li>
                <li><strong>Odair Inácio Fernandes</strong> – Secretário</li>
                <li><strong>Fábio Gandolfo Severino</strong> – Tesoureiro</li>
              </ul>
            </div>

            <div class="staff-box">
              <h2>Colaboradores</h2>
              <div class="staff-info">
                <p><strong>Período:</strong> 01/11/2023 a 30/10/2026</p>
                <p><strong>20</strong> funcionários contratados</p>
                <p><strong>238</strong> voluntários fixos</p>
                <p><strong>17</strong> voluntários flutuantes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-banner {
      background: linear-gradient(135deg, #0d3c6e 0%, #0083c0 100%);
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
    .breadcrumb a:hover {
      text-decoration: underline;
    }
    .page-banner h1 {
      font-size: clamp(30px, 4vw, 44px);
      font-weight: 700;
      color: #ffffff;
      margin: 0 0 12px;
    }
    .banner-subtitle {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.9);
      margin: 0;
    }

    .about-page-content {
      background-color: #f9fbfd;
      padding-bottom: 60px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .section-title {
      font-size: 32px;
      font-weight: 700;
      color: #0083c0;
      text-align: center;
      margin-bottom: 32px;
    }

    /* Seção Fundadores */
    .founders-section {
      padding: 60px 0;
    }
    .founders-tabs {
      display: flex;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 32px;
    }
    .tab-btn {
      padding: 12px 24px;
      font-size: 16px;
      font-weight: 600;
      color: #0083c0;
      background: #ffffff;
      border: 2px solid #0083c0;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .tab-btn:hover, .tab-btn.active {
      background: #0083c0;
      color: #ffffff;
    }
    .founder-card-content {
      background: #ffffff;
      border-radius: 16px;
      padding: 40px;
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
    }
    .founder-grid {
      display: grid;
      grid-template-columns: 260px 1fr;
      gap: 40px;
      align-items: start;
    }
    .founder-img-col img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.1);
      display: block;
    }
    .founder-text-col h3 {
      font-size: 26px;
      font-weight: 700;
      color: #0d3c6e;
      margin-top: 0;
      margin-bottom: 16px;
    }
    .founder-text-col p {
      font-size: 16px;
      line-height: 1.7;
      color: #444444;
      margin-bottom: 16px;
    }

    /* Seção Galeria */
    .gallery-section {
      padding: 50px 0;
      background: #ffffff;
    }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 16px;
    }
    .gallery-item {
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      height: 200px;
    }
    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .gallery-item:hover img {
      transform: scale(1.06);
    }

    /* Propósito e Valores */
    .purpose-values-section {
      padding: 60px 0;
    }
    .purpose-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
      background: #ffffff;
      border-radius: 16px;
      padding: 40px;
      box-shadow: 0 6px 24px rgba(0,0,0,0.06);
    }
    .purpose-img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      display: block;
    }
    .purpose-block h2, .values-block h2 {
      font-size: 26px;
      font-weight: 700;
      color: #0083c0;
      margin-bottom: 12px;
    }
    .purpose-block p {
      font-size: 16px;
      line-height: 1.7;
      color: #444444;
      margin-bottom: 28px;
    }
    .values-text {
      font-size: 16px;
      line-height: 1.7;
      color: #0d3c6e;
      font-weight: 600;
      font-style: italic;
    }

    /* Diretoria e Colaboradores */
    .board-staff-section {
      padding: 50px 0;
    }
    .board-staff-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }
    .board-box, .staff-box {
      background: #ffffff;
      border-radius: 16px;
      padding: 36px;
      box-shadow: 0 6px 24px rgba(0,0,0,0.06);
    }
    .board-box h2, .staff-box h2 {
      font-size: 24px;
      font-weight: 700;
      color: #0083c0;
      margin-bottom: 20px;
    }
    .board-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .board-list li {
      font-size: 16px;
      padding: 10px 0;
      border-bottom: 1px solid #f0f0f0;
      color: #333333;
    }
    .board-list li:last-child {
      border-bottom: none;
    }
    .staff-info p {
      font-size: 16px;
      margin: 10px 0;
      color: #333333;
    }

    @media (max-width: 860px) {
      .founder-grid {
        grid-template-columns: 1fr;
      }
      .purpose-grid {
        grid-template-columns: 1fr;
      }
      .board-staff-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {
  readonly activeFounderId = signal<string>('marlene-nobre');

  readonly founders: Founder[] = [
    {
      id: 'marlene-nobre',
      name: 'Dra. Marlene Nobre',
      image: 'images/sobre/marlene-nobre.jpg',
      bio: [
        'Marlene Rossi Severino Nobre nasceu em 1937, em Severínia, São Paulo, filha de pais espíritas. Desde jovem, esteve envolvida com a causa espírita, influenciada por figuras como Cairbar Schutel. Trabalhou como funcionária do Colégio Paes Leme antes de iniciar o curso de Medicina na Faculdade Federal do Triângulo Mineiro em 1957. Conheceu Chico Xavier em 1958, e colaborou com ele na Comunhão Espírita Cristã em Uberaba até 1962. Em 1963, mudou-se para São Paulo e continuou suas atividades espíritas, incluindo ensino e programas de rádio.',
        'De 1963 a 1967, estagiou no Hospital das Clínicas de São Paulo e, posteriormente, em hospitais em Paris. Em 1968, começou a trabalhar no Instituto de Previdência, dedicando-se à prevenção do câncer. Foi presidente da Associação Médico-Espírita do Brasil e participou da fundação da Associação Médico-Espírita de São Paulo.',
        'Marlene foi uma liderança importante no Movimento Espírita no Brasil, dedicando-se a diversas atividades, incluindo mediunidade, trabalho social, e publicação de 11 livros. Faleceu em 2015, deixando um legado significativo na área médico-espírita.'
      ]
    },
    {
      id: 'paulo-rossi',
      name: 'Paulo Rossi Severino',
      image: 'images/sobre/paulorossi.jpg',
      bio: [
        'Paulo Rossi Severino nasceu em 1933, em Cajobi, São Paulo, em uma família espírita. Desde cedo, dedicou-se à educação e à divulgação da Doutrina Espírita. Casado com Cléria Gandolfo Severino desde 1962, teve três filhos: Fábio, Ana Carolina e Leda Cristina. Foi professor no Colégio Paes Leme de 1951 a 1971 e também trabalhou no comércio e como relações públicas.',
        'Discípulo de Chico Xavier, Paulo aplicava os ensinamentos espíritas em suas atividades de caridade, como a distribuição de sopa e material escolar para crianças carentes. Ele liderou a Folha Espírita e a FE Editora, além de participar do Grupo Espírita Cairbar Schutel e do Lar do Alvorecer Marlene Nobre.',
        'Paulo incentivou jovens voluntários na produção do jornal Folha Espírita e conduziu pesquisas com famílias de jovens desencarnados, o que resultou no livro "A Vida Triunfa" em 1990. Ele também escreveu outros quatro livros, incluindo "De Volta à Realidade" e "O Legado de Marlene Nobre". Paulo foi uma figura dedicada e entusiasta na divulgação do Espiritismo, deixando um legado significativo até sua desencarnação em 2017.'
      ]
    },
    {
      id: 'cecilia',
      name: 'Cecília Mello Matos',
      image: 'images/sobre/ceilia.png',
      bio: [
        'Amiga da dra. Marlene Nobre desde a década de 1960, quando ela era ainda solteira, se quer tinha conhecido o dr. Freitas Nobre, foi uma companheira de ideal exemplar. Dedicada e totalmente entregue à causa, ela atuou na diretoria do Grupo Espírita desde 1974 e permaneceu até 2020, quando pediu licença para deixar a vice-presidência.',
        'Sua dedicação também se deu para a Folha Espírita, pois Cecilia colaborou com o jornal desde a sua fundação. A ela também devemos os exemplos que transmitiu aos seus queridos filhos, Acildon Mattos e Sidônio Mattos, que tanto amor e trabalho dedicam à causa da divulgação da doutrina. A eles, nosso eterno agradecimento.'
      ]
    },
    {
      id: 'magali',
      name: 'Magali Abujade',
      image: 'images/sobre/magali-abujade.jpg',
      bio: [
        'Magali Abujade nasceu em Tabapuã, São Paulo, e desde jovem esteve envolvida com a Doutrina Espírita, graças à amizade de sua família com a de Marlene Nobre. Quando se mudou para São Paulo, passou a frequentar o Grupo Espírita Cairbar Schutel (GECS), fundado por Marlene e seus familiares.',
        'O GECS foi um marco na vida de Magali, que frequentava quase todos os dias, engajando-se nas diversas ações assistenciais e no estudo da Doutrina Espírita. A filosofia espírita teve um papel fundamental em sua formação, tanto física quanto espiritual.',
        'Ao longo dos anos, se envolveu profundamente na administração e nos trabalhos do GECS. Foi secretária da casa durante vários anos, diretora do Departamento de Assistência Social, coordenadora de salas mediúnicas e, por fim, presidente do grupo. Atualmente, exerce suas atividades como vice-presidente do GECS, dedicando-se de maneira mais reservada devido à sua idade avançada, mas sempre mantendo seu compromisso com a Doutrina Espírita que marcou sua vida de maneira indelével.'
      ]
    }
  ];

  readonly galleryImages: string[] = [
    'images/sobre/galeria-1.jpg',
    'images/sobre/galeria-2.jpg',
    'images/sobre/galeria-3.jpg',
    'images/sobre/galeria-4.jpg',
    'images/sobre/galeria-5.jpg',
    'images/sobre/galeria-6.jpg',
    'images/sobre/galeria-7.jpg'
  ];
}
