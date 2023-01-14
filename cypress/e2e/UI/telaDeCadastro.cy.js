const faker = require('faker-br');
var emailAleatorio = faker.internet.email();
var telefoneAleatorio = faker.phone.phoneNumber();
var nomeAleatorio = faker.name.firstName();
const valida = require('../../support/Elements/CadastroElements').ELEMENTS


describe('tela de cadastro', () => {
    it('cadastro valido', () => {
       cy.urlSystemCall();
       cy.Cadastro(nomeAleatorio, telefoneAleatorio, emailAleatorio, 'aaaa123');
       cy.get(valida.bemVindo).should('contain','Bem vindo à plataforma!')
    });

});