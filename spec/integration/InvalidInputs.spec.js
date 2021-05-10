const INVALID_ROLL_ALERT = 'Please enter a valid roll!'

describe('Entering Invalid input', () => {
  it('displays alert when entering non-number', () => {
    cy.visit('/')
    cy.get('#roll-input').clear().type('a')
    cy.get('#add-roll').click()
    cy.on('window:alert', (alert) => expect(alert).to.equal(INVALID_ROLL_ALERT))
  })

  it('displays alert when entering negative number', () => {
    cy.visit('/')
    cy.get('#roll-input').clear().type(-1)
    cy.get('#add-roll').click()
    cy.on('window:alert', (alert) => expect(alert).to.equal(INVALID_ROLL_ALERT))
  })

  it('displays alert when entering number greater than 10', () => {
    cy.visit('/')
    cy.get('#roll-input').clear().type(11)
    cy.get('#add-roll').click()
    cy.on('window:alert', (alert) => expect(alert).to.equal(INVALID_ROLL_ALERT))
  })
})
