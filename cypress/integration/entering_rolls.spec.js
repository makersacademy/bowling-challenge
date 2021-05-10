describe('Entering rolls', () => {
  it('displays the number after a roll is added', () => {
    cy.visit('/')
    cy.get('#roll-input').type(8)
    cy.get('#add-roll').click()
    cy.get('#frame1-roll1').contains(8)
  })

  it('displays the frame score once a frame is over', () => {
    cy.visit('/')
    cy.get('#roll-input').type(8)
    cy.get('#add-roll').click()
    cy.get('#roll-input').type(2)
    cy.get('#add-roll').click()
    cy.get('#frame-score1').contains(8)
  })
})
