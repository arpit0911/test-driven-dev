// https://docs.cypress.io/api/introduction/api.html
// text input
// type some tex
// button to clear the text


describe('Clear Text Input', () => {
  it('Text Input', () => {
    cy.visit('/')
    cy.get('.text-input').type('test text')
    cy.get('.btn').click()
    cy.get('.text-input').should('have.value', '')
  })
})
