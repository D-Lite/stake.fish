describe('The Stake.fish application loads', () => {
    it('loads page completely', () => {
        cy.visit('http://localhost:3000')
    })

    it('loads navbar', () => {
        cy.visit('http://localhost:3000')

        // Navbar
        cy.get('div.pageNavbar')
            .should('be.visible')
            .within(() => {
                cy.get('a')
                    .should('be.visible')
                    .should('contain.text', 'Stake.fish')
                cy.get('button')
                    .get('svg')
            })
    })

    it('loads footer', () => {
        cy.visit('http://localhost:3000')

        // Footer
        cy.get('div.pageFooter')
            .should('be.visible')
            .within(() => {
                cy.get('.footerText')
                    .should('be.visible')
                    .should('contain.text', 'Stake.fish Assessment')
            })
    })
})
