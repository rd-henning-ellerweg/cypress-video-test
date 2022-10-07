/// <reference types="cypress" />
describe('first', () => {
  it('banner', () => {
    cy.visit('https://example.cypress.io')
    cy.get('.banner').should('contain.text', 'Kitchen Sink')
  })
})
