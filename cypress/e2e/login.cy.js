describe('Login de ususarios alura pic', ()=>{
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    });
    it('fazer login de usuario invalido', () => {
        cy.login('jojo', '122')
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('Invalid user name or password')
        })
    });

    it('fazer login de usuario valido', () => {
        cy.login('flavio', '123')
        cy.contains('a', '(Logout)').should('be.visible')
    });
})