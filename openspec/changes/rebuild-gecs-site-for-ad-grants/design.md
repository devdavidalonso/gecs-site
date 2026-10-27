## Context

O site legado enfrenta grandes dificuldades técnicas de arquitetura e performance. A abordagem escolhida (detalhada no `proposal.md`) é descartar a base de código antiga (CMS) e adotar um ecossistema Single Page Application / SSR moderno com Angular.

## Goals / Non-Goals

**Goals:**
- Implementar a nova interface utilizando estritamente Angular 15+ com **Standalone Components**.
- Estilizar toda a aplicação usando utilitários do **Tailwind CSS** com foco 100% Mobile-First.
- Utilizar **Signals** para a gestão de reatividade e estado da interface de usuário.
- Garantir marcação HTML5 semântica rígida para atingir os KPIs do Google Ad Grants (SEO e Acessibilidade).
- Preparar interfaces de dados (Models) que consumirão, futuramente, a nova API em Go.

**Non-Goals:**
- Construção efetiva do backend em Go (o escopo atual é focado no Frontend; criaremos apenas mocks ou abstrações de serviços).
- Migração de banco de dados ou conteúdo dinâmico legado complexo (focaremos no conteúdo estático principal).

## Decisions

- **Arquitetura Standalone (Angular)**: 
  - *Decisão*: Não utilizaremos `NgModules`. Todo componente terá `standalone: true`.
  - *Razão*: Reduz a complexidade da base de código e diminui o tamanho final do bundle pela melhoria do tree-shaking, sendo vital para o Core Web Vitals.
- **Reatividade com Signals**:
  - *Decisão*: Estado será gerido via `signal()`, `computed()` e `effect()`, abandonando `BehaviorSubject` do RxJS sempre que não houver assincronia pesada.
  - *Razão*: Atualizações de UI cirúrgicas, poupando bateria e CPU mobile.
- **Estilização com Tailwind CSS**:
  - *Decisão*: Utilizar classes utilitárias no HTML (ex: `w-full md:w-1/2 p-4`).
  - *Razão*: Garante responsividade instantânea no desenvolvimento e previne acúmulo de arquivos CSS desnecessários, mantendo a performance visual altíssima.

## Risks / Trade-offs

- **Risco de Performance do Bundle Angular**: 
  - *Mitigação*: Aplicação rigorosa de lazy loading nas rotas e componentes pesados. Auditoria frequente com o Chrome DevTools e PageSpeed Insights para assegurar LCP rápido.
- **Curva de Adequação do Conteúdo Ad Grants**: 
  - *Mitigação*: Os textos na Hero Section e CTA serão estáticos (hardcoded) inicialmente para garantir a rápida verificação e aprovação pelo Google, ao invés de dependerem de um CMS.
