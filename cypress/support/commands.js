// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const campos = require ('../support/Elements/CadastroElements').ELEMENTS

Cypress.Commands.add('urlSystemCall',()=>{
cy.visit('https://jgsl-systemcalling.netlify.app/')
});
Cypress.Commands.add('Cadastro',(nome, telefone, email, senha)=>{
        cy.get(campos.btnRegister).click()
        cy.get(campos.campoNome).type(nome)
        cy.get(campos.campoTelefone).type(telefone)
        cy.get(campos.campoEmail).type(email)
        cy.get(campos.campoSenha).type(senha)
        cy.get(campos.btnCadastrar).click()
});

Cypress.Commands.add('login',(email, senha)=>{
    cy.get('.buttonLinkHome').click()
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Senha"]').type(senha)
    cy.get('.buttonLogIn').click()
})