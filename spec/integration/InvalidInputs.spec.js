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

  it('displays alert when entering two rolls greater than 10', () => {
    cy.visit('/')
    cy.get('#roll-input').clear().type(5)
    cy.get('#add-roll').click()

    cy.get('#roll-input').clear().type(6)
    cy.get('#add-roll').click()

    cy.on('window:alert', (alert) => expect(alert).to.equal(INVALID_ROLL_ALERT))
  })

  it('displays alert when entering a null roll', () => {
    cy.visit('/')
    cy.get('#roll-input').clear().should('be.empty')
    cy.get('#add-roll').click()
    cy.on('window:alert', (alert) => expect(alert).to.equal(INVALID_ROLL_ALERT))
  })
})
