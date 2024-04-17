describe('Login Page', () => {
    it('should display "Done" message when valid credentials are entered', () => {
        cy.visit('http://127.0.0.1:5500/') // Replace with the path to your login page
        cy.get("label").should('have.text', 'Username').type("test")
        cy.contains('Done').should('exist')
    })

})

