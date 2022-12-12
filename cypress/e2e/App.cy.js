/* eslint-disable no-undef */
/*describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
}) */

describe('App E2E', () => {
  it('should assert that true is equal to true', () => {
    expect(true).to.equal(true)
  })
})

describe('App E2E', () => {
  it('should have a header', () => {
    cy.visit('http://localhost:3004')
    cy.get('h1').should('have.text', 'My Counter')
  })
})

describe('App E2E', () => {
  it('should have a header', () => {
    cy.visit('http://localhost:3004/')

    cy.get('h1').should('have.text', 'My Counter')
  })

  it('should increment and decrement the counter', () => {
    cy.visit('http://localhost:3004/')

    cy.get('p').should('have.text', '0')
  })
})

describe('App E2E', () => {
  it('should have a header', () => {
    cy.visit('http://localhost:3004/')

    cy.get('h1').should('have.text', 'My Counter')
  })

  it('should increment and decrement the counter', () => {
    cy.visit('http://localhost:3004/')

    cy.get('p').should('have.text', '0')

    cy.contains('Increment').click()
    cy.get('p').should('have.text', '1')

    cy.contains('Increment').click()
    cy.get('p').should('have.text', '2')

    cy.contains('Decrement').click()
    cy.get('p').should('have.text', '1')
  })
})