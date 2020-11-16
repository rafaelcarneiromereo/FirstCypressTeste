/// <reference types="cypress" />

describe('Meu Primeiro Teste', () =>{
    it('Criar conta', () =>{
        
        cy.visit('https://slidesigreja-ff51f.web.app/login');
        cy.wait(500);
        cy.get('[id=cadastre-se]').click();
        cy.get('[id=username]').type('tst@mail.com');
        cy.get('[id=password]').type('1Dois3Quatro5');
        cy.get('[id=nome-completo]').type('Rafael Carneiro');
        cy.get('[id=cargo-usuario]').select('Líder de Jovens');
        cy.get('[id=password]').focus().type('{enter}');
    });   
});
