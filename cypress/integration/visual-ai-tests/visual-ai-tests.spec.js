/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress" />
import { AppPage } from '../../page-objects/app-page'
import { LoginPage } from '../../page-objects/login-page'


describe('Login function', () => {
    const loginPage = new LoginPage();

    before(() => {
        cy.visit(Cypress.env('isV1') ? '/hackathon.html' : '/hackathonV2.html');

        cy.eyesOpen({
            testName: 'Login page has all UI elements and validations'
        });
    })

    after(() => {
        cy.eyesClose();
    })

    it('Login page has all UI elements', () => {
        cy.eyesCheckWindow('Login page');
    })

    const testCases = [
        ['', ''],
        ['username', ''],
        ['', 'password']
    ]

    testCases.forEach((tc) => {
        it(`Login function: "${tc[0]}" - "${tc[1]}" should show error`, () => {
            loginPage.inputUsernamePassword(tc[0], tc[1]);
            cy.eyesCheckWindow(`Validation for '${tc[0]}'-'${tc[1]}'`);
        })
    })

    it('Login function: should be able to log in with correct username and password', () => {
        loginPage.inputUsernamePassword('username', 'password');
        cy.eyesCheckWindow('Logged-in site');
    })
})

describe('Application', () => {
    const appPage = new AppPage();

    beforeEach(() => {
        const loginPage = new LoginPage();

        cy.visit(Cypress.env('isV1') ? '/hackathon.html' : '/hackathonV2.html');

        loginPage.inputUsernamePassword('p.rabbit', 'CarrotCake');
        cy.contains('Recent Transactions');

        cy.eyesOpen();
    })

    afterEach(() => {
        cy.eyesClose();
    })

    it('Amounts column should have ascending order & data should stay in tact after sorting', () => {
        appPage.amountHeader().click();
        cy.eyesCheckWindow({
            target: 'region',
            selector: '#transactionsTable',
            tag: 'Sort order'
        });

        cy.eyesCheckWindow({
            target: 'region',
            selector: '#transactionsTable',
            tag: 'Row data stays in tact'
        });
    })

    it('Can see bar chart data for 2 and 3 years', () => {
        appPage.compareExpensesBtn().click();
        cy.wait(1000);
        cy.eyesCheckWindow({
            target: 'region',
            selector: '#canvas',
            tag: '2 years'
        });

        appPage.addDataSetBtn().click();
        cy.wait(1000);
        cy.eyesCheckWindow({
            target: 'region',
            selector: '#canvas',
            tag: '3 years'
        });
    })
})

describe('Dynamic content', () => {
    it('Can see flash sale banners', () => {
        const loginPage = new LoginPage();

        cy.visit(Cypress.env('isV1') ? '/hackathon.html?showAd=true' : '/hackathonV2.html?showAd=true');
        
        loginPage.inputUsernamePassword('p.rabbit', 'CarrotCake');
        cy.contains('Recent Transactions');

        cy.eyesOpen();
        cy.eyesCheckWindow({
            target: 'region',
            selector: '.element-balances',
            tag: 'Sale banners'
        });
        cy.eyesClose();
    })
})