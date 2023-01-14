import dadoslogin from '../../fixtures/dadosLogin.json'
const valida = require('../../support/Elements/CadastroElements').ELEMENTS

describe('tela de login', () => {
    it('realiza login com sucesso', () => {
        cy.urlSystemCall();
        cy.login(dadoslogin.email, dadoslogin.senha);
        cy.get(valida.bemVindo).should('contain','Bem vindo de volta!')
    });
    
});