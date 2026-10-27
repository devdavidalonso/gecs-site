## Purpose
Implementação de um botão e fluxo de doação claro, seguro e focado na causa filantrópica.

## ADDED Requirements

### Requirement: High contrast Call-to-Action for donations
The system MUST display a "Quero Ajudar" CTA button with high visual contrast that directs users to the donation flow.

#### Scenario: User decides to donate
- **WHEN** the user views the donation CTA on the page
- **THEN** the button is easily distinguishable from other elements
- **THEN** the button strictly communicates support for the cause, with no e-commerce wording

### Requirement: Secure donation routing
The donation CTA MUST route the user to a valid, secure HTTPS endpoint or page dedicated to processing donations.

#### Scenario: User clicks the donation CTA
- **WHEN** the user clicks the "Quero Ajudar" button
- **THEN** the user is securely routed to the donation instructions or processing page without mixed content errors
