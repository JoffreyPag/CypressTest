describe('Login e registro de usuarios alura pic', ()=>{
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    });
    
    it('verifica mensagens validacao', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    });

    it('verifica email invalido', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="email"]').type('joffrey')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
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

    it('Registrar usuario', () => {
        cy.contains('a', 'Register now').click()
        cy.get('input[formcontrolname="email"]').type('joffrey@email.com')
        cy.get('input[formcontrolname="userName"]').type('joffrey')
        cy.contains('button', 'Register').click()
        cy.contains('small', 'User available')
    });

    it('faz algo', () => {
        
    });
})