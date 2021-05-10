describe('Entering rolls', () => {
  it('displays the number after a roll is added', () => {
    cy.visit('/')
    cy.get('#roll-input').clear().type(8).should('have.value', 8)
    cy.get('#add-roll').click()
    cy.get('#frame1-roll1').contains(8)
  })


  it('displays the frame score once a frame is over', () => {
    cy.visit('/')
    cy.get('#roll-input').clear().type(8).should('have.value', 8)
    cy.get('#add-roll').click()

    cy.get('#roll-input').clear().type(2).should('have.value', 2)
    cy.get('#add-roll').click()

    cy.get('#frame-score1').contains(10)
  })

  it('correctly updates frame scores with their bonus', () => {
    cy.visit('/')
    cy.get('#roll-input').clear().type(10)
    cy.get('#add-roll').click()
    cy.get('#frame-score1').contains(10)

    cy.get('#roll-input').clear().type(5)
    cy.get('#add-roll').click()
    cy.get('#frame-score1').contains(15)
  })

  it('correctly shows the running total', () => {
    cy.visit('/')
    cy.get('#roll-input').clear().type(10)
    cy.get('#add-roll').click()
    cy.get('#frame-score1').contains(10)
    cy.get('#frame-score2').contains(10)

    cy.get('#roll-input').clear().type(10)
    cy.get('#add-roll').click()
    cy.get('#frame-score1').contains(20)
    cy.get('#frame-score2').contains(30)
    cy.get('#frame-score3').contains(30)

    cy.get('#roll-input').clear().type(10)
    cy.get('#add-roll').click()
    cy.get('#frame-score1').contains(30)
    cy.get('#frame-score2').contains(50)
    cy.get('#frame-score3').contains(60)
    cy.get('#frame-score4').contains(60)
  })
})
