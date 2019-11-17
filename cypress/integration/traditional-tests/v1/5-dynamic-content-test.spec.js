/// <reference types="Cypress" />
import { LoginPage } from '../../../page-objects/login-page'
import { AppPage } from '../../../page-objects/app-page'

describe('Dynamic content', () => {
    const appPage = new AppPage();

    before(() => {
        const loginPage = new LoginPage();

        cy.visit(Cypress.env('isV1') ? '/hackathon.html?showAd=true' : '/hackathonV2.html?showAd=true');

        loginPage.inputUsernamePassword('Cotton-tail', 'wait-what');
        cy.contains('Recent Transactions');
    })

    it('can see flashSale banner', () => {
        appPage.flashSaleBanner().should('have.attr', 'src', 'img/flashSale.gif');
    })

    it('can see flashSale2 banner', () => {
        appPage.flashSale2Banner().should('have.attr', 'src', 'img/flashSale2.gif');
    })
})