/// <reference types="cypress" />
describe('second', () => {
  it('banner-alt', () => {
    cy.visit('https://example.cypress.io')
    cy.get('.banner-alt').should('contain.text', 'Commands drive')
  })

  it('home-list', () => {
    cy.get('.home-list').should('contain.text', 'Querying')
  })

})
