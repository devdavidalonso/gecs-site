## Purpose
Estruturação do cabeçalho e rodapé funcionais, acessíveis e sem âncoras mortas para atender requisitos de navegação.

## ADDED Requirements

### Requirement: Functional global navigation
The system MUST provide a global navigation menu containing valid, working links to "Sobre", "Nossos Centros", "Atividades", "Contato", and "Doações".

#### Scenario: User navigates using the header
- **WHEN** the user clicks any link in the primary navigation header
- **THEN** the system routes the user to the correct page
- **THEN** no 404 errors or broken anchors (`href="#"`) occur

### Requirement: Semantic and accessible navigation markup
The navigation structure MUST be wrapped in semantically correct HTML5 tags (`<header>`, `<nav>`) and include proper ARIA labels for accessibility.

#### Scenario: Screen reader parses the header
- **WHEN** an accessibility tool or screen reader parses the page
- **THEN** it correctly identifies the primary navigation region and link purposes
