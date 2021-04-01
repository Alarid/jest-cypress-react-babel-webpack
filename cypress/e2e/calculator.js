describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/')
    cy.get('._2S_Gj6clvtEi-dZqCLelKb > :nth-child(3)').click()
    cy.get('._1yUJ9HTWYf2v-MMhAEVCAn > :nth-child(4)').click()
    cy.get('._2S_Gj6clvtEi-dZqCLelKb > :nth-child(4)').click()
    cy.get('._1yUJ9HTWYf2v-MMhAEVCAn > :nth-child(5)').click()
    cy.get('.css-1bzsv8h-calculator-display--DisplayContainer').should(
      'have.text',
      '3',
    )
  })
})
