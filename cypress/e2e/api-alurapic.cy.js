describe('Buscar fotos e dados', ()=>{
    it.only('buscar fotos do flavio', () => {
        cy.request(
            'GET',
            'https://apialurapic.herokuapp.com/flavio/photos'
        ).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')
        })
    });
    it('fazer login do flavio', () => {
        cy.request(
            'POST',
            'https://apialurapic.herokuapp.com/user/login',
            Cypress.env()
        ).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('email')
            expect(res.body.email).to.be.equal('flavio@alurapic.com.br')
        })
    });
})