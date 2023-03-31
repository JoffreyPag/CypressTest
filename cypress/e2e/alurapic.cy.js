describe('Usabilidade da pagina inicial', ()=>{
    beforeEach(() => {
        cy.visit('/')
    });
    it('verifica mensagens tela inicial', () => {
        cy.contains('ap-vmessage','User name is required!').should('be.visible')
        cy.contains('ap-vmessage','PAssword is required!').should('be.visible')
        cy.get('button[type="submit"]').should('be.disabled')
    });


})