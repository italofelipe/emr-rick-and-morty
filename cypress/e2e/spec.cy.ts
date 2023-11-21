describe('EMR spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Verifies wether theres a title on page', () => {
    cy.get('h1').contains('Rick and Morty - EMR Challenge');
  });

  it('Verify if a GraphQL request was made when page loads', () => {
    cy.intercept('POST', '**/graphql').as('graphqlRequest');


    cy.wait('@graphqlRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
  });

  it("Verifies if there's 20 characters card", () => {
    cy.get('[data-testid="character-card"]').should('have.length', 20);
  });
  it("Searches for a specific character", () => {
    cy.get('input').type('Director');
    cy.get('button[type="submit"]').click();
    cy.wait(1000);
    cy.get('[data-testid="character-card"]').should('have.length', 1);

  });
  it('Redirects to character page', () => {
    cy.get('[data-testid="character-card"]').first().click();
    cy.url().should('include', '/character');
    cy.wait(1000);

    cy.get('[data-testid="back-button"]').click();
    cy.url().should('eq', 'http://localhost:3000/');

  });

  it("Should navigate to second page", () => {
    cy.get('.page-2').click();

    cy.get('[data-testid="character-card"]').should('have.length', 20);

  });
});