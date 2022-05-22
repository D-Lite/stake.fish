describe('The Stake.fish application loads', () => {
    // this tests works only for binance currently but the scope can be increased
    it('loads page completely', () => {
        cy.visit('http://localhost:3000/exchange/binance')
    })

    it("Get individual exchange using the ID", () => {
        const id = "binance";
        cy.request(`https://api.coingecko.com/api/v3/exchanges/${id}`)
            .then((response) => {
                    expect(response.body)
                    expect(response.body).to.have.property('name').equal("Binance");
        })
    })
 
})
