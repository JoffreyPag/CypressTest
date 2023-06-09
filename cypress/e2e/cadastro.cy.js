describe('Cadastro de ususarios alura pic', ()=>{
    beforeEach(() => {
        cy.visit('/')
    });

    it('verifica email invalido', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="email"]').type('joffrey')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
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

    it('verifica mensagens de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="password"]').type('123')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage','Mininum length is 8').should('be.visible')
    });


    it('Validar nome de usuario valido', () => {
        cy.contains('a', 'Register now').click()
        cy.get('input[formcontrolname="email"]').type('joffrey@email.com')
        cy.get('input[formcontrolname="userName"]').type('joffrey321')
        cy.contains('button', 'Register').click()
        cy.contains('small', 'User available')
    });

    const usuarios = require('../fixtures/usuarios.json')
    usuarios.forEach(usuario =>{
        it.only(`Registrar novo usuario ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click()
            cy.get('input[formcontrolname="email"]').type(usuario.email)
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName)
            cy.get('input[formcontrolname="userName"]').type(usuario.userName)
            cy.get('input[formcontrolname="password"]').type(usuario.password)
            cy.contains('button', 'Register').click()
        });
    })
    

})