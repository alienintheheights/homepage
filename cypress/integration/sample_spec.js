
describe('Homepage', function () {

    it("Toggles the Shows link", function () {
        cy.visit('/')
        cy.get('#future-show-link').contains('Upcoming Shows').should('have.class', 'show-active-link')
        cy.get('#past-show-link').click()
    })

    it('Takes a screenshot', function () {
        cy.visit('/')
        cy.get('#past-show-link').click()
        cy.screenshot() // saved as 'cypress/sreenshots/my tests -- takes a screenshot.png'
    })
})
