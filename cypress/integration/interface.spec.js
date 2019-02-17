/// <reference types="Cypress" />

context('Confirm page load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
})

it('should load the javascript files to populate initial state', () => {
  // cy.get('#game-total').should('have_value', '0')
  cy.visit('http://localhost:3000')
  cy.get('#frame-number')
    .should('contain.text', '0')
})
