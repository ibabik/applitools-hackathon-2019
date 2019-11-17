/// <reference types="Cypress" />
import { LoginPage } from '../../../page-objects/login-page'

describe('Login page', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.visit(Cypress.env('isV1') ? '/hackathon.html' : '/hackathonV2.html');
    })

    const testCases = [
        ['', '', 'Both Username and Password must be present '],
        ['username', '', 'Both Username and Password must be present '],
        ['', 'password', 'Both Username and Password must be present ']
    ]

    testCases.forEach((tc) => {
        it(`"${tc[0]}" - "${tc[1]}" should throw error: "${tc[2]}"`, () => {
            loginPage.inputUsernamePassword(tc[0], tc[1]);
            cy.contains(tc[2]);
        })
    })

    it('should log in when both username and password are present', () => {
        loginPage.inputUsernamePassword('p.rabbit', 'CarrotCake');
        cy.contains('Recent Transactions');
    })
})