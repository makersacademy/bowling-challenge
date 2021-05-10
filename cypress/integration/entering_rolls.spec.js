describe('Entering rolls', () => {
  it('displays the number after a roll is added', () => {
    cy.visit('/')
    cy.get('#roll-input').type(8)
    cy.get('#add-roll').click()
    cy.get('#1-1').contains(8)
  })
})
