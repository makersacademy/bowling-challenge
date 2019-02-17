
beforeEach(() => {
  cy.visit('http://localhost:3000')
})

it('should load the javascript files to populate initial state', () => {
  cy.get('#frame-number')
    .should('contain.text', '0')
})

let submitScore = (roll) => {
  cy.get('#current-roll')
    .type(roll)
  cy.get('#input-roll')
    .contains('Submit')
    .click()
}

it('should record game score', () => {
  submitScore('5')
  submitScore('3')
  cy.get('#game-total')
    .should('contain.text', '8')
})

it('should record the score for each round', () => {
  submitScore('5')
  submitScore('3')
  submitScore('2')
  submitScore('2')
  cy.get('#1').within(() => {
    cy.get('.roll-1')
      .should('contain.text', '5')
    cy.get('.roll-2')
      .should('contain.text', '3')
  })
  cy.get('#2').within(() => {
    cy.get('.roll-1')
      .should('contain.text', '2')
    cy.get('.roll-2')
      .should('contain.text', '2')
  })
})

it('should show the symbol for a strike', () => {
  submitScore('10')
  cy.get('#1')
    .get('.symbol')
    .should('contain.text', 'X')
})

it('should show the symbol for a spare', () => {
  submitScore('5')
  submitScore('5')
  cy.get('#1')
    .get('.symbol')
    .should('contain.text', '/')
})
