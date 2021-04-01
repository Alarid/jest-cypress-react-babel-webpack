describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/')
    cy.findByText(/^1$/).click()
    cy.findByText(/^\+$/).click()
    cy.findByText(/^2$/)
      // .then(subject => {
      //   debugger
      //   return subject
      // })
      // .debug()
      .click()
    cy.findByText(/^=$/).click()

    cy.findByTestId('total').should('have.text', '3')
  })
})
