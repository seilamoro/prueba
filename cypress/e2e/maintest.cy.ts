import "../support/commands";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('[data-testid="pageTitle"]').should('exist');
    cy.get('[data-testid="numPodcasts"]').should('exist');
    cy.contains('The Joe Budden Network').should('exist');
    cy.contains('The Joe Budden Network').click();

    cy.contains('Unbuttoned', { timeout: 10000 }).should('exist');
    cy.get('[data-testid="pageTitle"]').should('exist');
    cy.get('[data-testid="divSiderbar"]').should('exist');
    cy.get('[data-testid="divList"]').should('exist');
    cy.contains('Unbuttoned').click();
    
    cy.get('[data-testid="divEpisodeData"]', { timeout: 10000 }).should('exist');
    cy.get('[data-testid="pageTitle"]').should('exist');
    cy.get('[data-testid="divSiderbar"]').should('exist');
    cy.contains('Just in time for the latest episode of the JBP').should('exist');
    cy.get('[data-testid="trackAudio"]').should('exist');
    cy.get('[data-testid="pageTitle"]').click();

    cy.get('[data-testid="numPodcasts"]', { timeout: 10000 }).should('exist');
  })
})