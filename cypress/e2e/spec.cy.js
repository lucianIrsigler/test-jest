describe('Cypress test', () => {
  it('check if button works', () => {
    cy.visit('https://salmon-sky-081a77903.5.azurestaticapps.net/')
    cy.get('#loadCarsBtn').click()
    cy.get('h2').first().should('have.text','Toyota Camry')
  })
})