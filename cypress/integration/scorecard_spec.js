
describe('Bowling Scorecard', function() {
  it('can view scorecard calculator', function() {
    cy.visit('./')
    cy.contains('Bowling Scorecard')
  })

  it('can select roll score 0-10', function() {
    cy.visit('./')
    cy.contains('0').click()
    // cy.contains('1').click()
    // cy.contains('2').click()
    // cy.contains('3').click()
    // cy.contains('4').click()
    cy.contains('5').click()
    // cy.contains('6').click()
    // cy.contains('7').click()
    // cy.contains('8').click()
    // cy.contains('9').click()
    cy.contains('10').click()
  })
})
