## Purpose
Estruturação da página inicial otimizada para Core Web Vitals e com Hero Section explicitando a missão, visando conformidade Ad Grants.

## ADDED Requirements

### Requirement: Hero Section explicitly states mission
The system MUST display a Hero Section above the fold that clearly and legibly states the philanthropic mission of GECS.

#### Scenario: User visits the home page
- **WHEN** the user navigates to the root URL
- **THEN** the first visible section displays the GECS mission statement
- **THEN** the layout renders correctly on mobile devices without horizontal scrolling

### Requirement: Page speed performance compliance
The page MUST render semantically using HTML5 (`<main>`, `<section>`) and load resources efficiently to meet high PageSpeed thresholds.

#### Scenario: Automated crawler audits the page
- **WHEN** the PageSpeed Insights tool analyzes the page
- **THEN** the page structure uses correct semantic tags and avoids performance bottlenecks
