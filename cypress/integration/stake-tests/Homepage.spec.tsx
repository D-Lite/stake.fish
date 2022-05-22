describe('The Stake.fish application loads', () => {
    it('loads page completely', () => {
        cy.visit('http://localhost:3000')
    })

    it("Test CoinGecko API", () => {
        cy.request("https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1")
            .then((response) => {
                    expect(response.body)
                    expect(response.body).to.have.property('length').equal(10);
        })
    })

    it('loads exchange list', () => {
        cy.visit('http://localhost:3000')

        // Body
        cy.get('div.exchangeList')
            .should('be.visible')
            .within(() => {
                cy.get('div.chakra-linkbox')
                    .should('be.visible')
            })

        })

    it('click on an exchange should open the exchange page (binance as example)', () => {
        cy.get('.openExchangePage').eq(0)
          .click({force: true}).wait
        // when clicked, it should open the exchange page
        cy.location().should((location) => {
          expect(location.pathname).to.eq('/exchange/binance')
        })

        })

})
