describe('Homepage Test', () => {
  it('Should load the homepage and verify title', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
    cy.screenshot('homepage');
  })
})
