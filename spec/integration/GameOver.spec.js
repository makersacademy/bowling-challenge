const GAME_OVER_ALERT = 'This game is over! Refresh to score a new game'

describe('When the game is over', () => {
  it('displays the total score', () => {
    cy.visit('/')

    new Array(12).fill(10).forEach(roll => {
      cy.get('#roll-input').clear().type(roll)
      cy.get('#add-roll').click()
    })

    cy.get('#total-score').contains(300)
  })

  it('displays alert when adding rolls after game is over', () => {
    cy.visit('/')

    new Array(13).fill(10).forEach(roll => {
      cy.get('#roll-input').clear().type(roll)
      cy.get('#add-roll').click()
    })

    cy.on('window:alert', (alert) => expect(alert).to.equal(GAME_OVER_ALERT))
  })
})
