## Why

O site atual do Grupo Espírita Cairbar Schutel (GECS) foi rejeitado no programa Google Ad Grants devido a múltiplas falhas de conformidade, incluindo conteúdo insuficiente/duplicado, missão pouco clara, navegação com links quebrados, lentidão severa, ausência de HTTPS e péssima experiência em dispositivos móveis. A reconstrução imediata com uma stack moderna é essencial para reverter essa rejeição, garantir o subsídio do Ad Grants e profissionalizar a comunicação da ONG.

## What Changes

- **Nova Stack Frontend**: Reescrita completa da interface utilizando Angular (Standalone Components) e Tailwind CSS para garantir performance, componentização e carregamento otimizado.
- **Abordagem Mobile-First**: O layout será criado prioritariamente para celulares, garantindo excelente usabilidade em telas menores.
- **Hero Section (Missão Clara)**: Inclusão de uma área inicial (Above the Fold) dedicada a explicar inequivocamente a missão filantrópica do GECS.
- **Navegação Funcional e Semântica**: Estruturação de links reais ("Sobre", "Nossos Centros", "Atividades", "Contato", "Doações") sem âncoras vazias e com HTML5 semântico rigoroso (`<header>`, `<main>`, `<nav>`).
- **Call-to-Action Adequado**: Botão "Quero Ajudar" com alto contraste e design focado em suporte à causa, sem indícios de e-commerce.
- **Preparo para Backend**: Estruturação de estados e serviços no Angular para consumo futuro de uma API RESTful em Go.

## Capabilities

### New Capabilities
- `home-page`: Criação da página inicial focada na declaração clara de missão e performance (SEO/PageSpeed).
- `navigation`: Estruturação da navegação principal e rodapé, garantindo zero links quebrados e total acessibilidade.
- `donation-cta`: Implementação de um fluxo de chamada para ação (Doação) seguro e adequado às políticas de filantropia.

### Modified Capabilities
- 

## Impact

Esta mudança substitui inteiramente o legado do CMS atual pela nova arquitetura Angular. Exigirá implantação em uma nova infraestrutura (como Firebase Hosting ou Cloud Run) para garantir HTTPS nativo e carregamento rápido global.
