describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="pageTitle"]').should('exist');
    cy.get('[data-testid="numPodcasts"]').should('exist');
    cy.contains('The Joe Budden Network').should('exist');
    cy.contains('The Joe Budden Network').click();

    cy.wait(10000);
    cy.get('[data-testid="pageTitle"]').should('exist');
    cy.get('[data-testid="divSiderbar"]').should('exist');
    cy.get('[data-testid="divList"]').should('exist');
    cy.contains('Unbuttoned').should('exist');
    cy.contains('Unbuttoned').click();
    
    cy.wait(10000);
    cy.get('[data-testid="pageTitle"]').should('exist');
    cy.get('[data-testid="divSiderbar"]').should('exist');
    cy.get('[data-testid="divEpisodeData"]').should('exist');
    cy.contains('Just in time for the latest episode of the JBP').should('exist');
    cy.get('[data-testid="trackAudio"]').should('exist');
    cy.get('[data-testid="pageTitle"]').click();

    cy.wait(10000);
    cy.get('[data-testid="numPodcasts"]').should('exist');
  })
})