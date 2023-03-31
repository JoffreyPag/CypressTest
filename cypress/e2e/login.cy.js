describe('Login de ususarios alura pic', ()=>{
    beforeEach(() => {
        cy.visit('/')
    });
    it('fazer login de usuario invalido', () => {
        cy.login('jojo', '122')
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('Invalid user name or password')
        })
    });

    it('fazer login de usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.contains('a', '(Logout)').should('be.visible')
    });
})