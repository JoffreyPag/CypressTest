describe('Usabilidade da pagina inicial', ()=>{
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    });
    it('verifica mensagens tela inicial', () => {
        cy.contains('ap-vmessage','User name is required!').should('be.visible')
        cy.contains('ap-vmessage','PAssword is required!').should('be.visible')
        cy.get('button[type="submit"]').should('be.disabled')
    });


})