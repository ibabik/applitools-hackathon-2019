/// <reference types="Cypress" />
import { LoginPage } from '../../../page-objects/login-page';

describe('Login page', () => {

    before(() => {
        cy.visit('/hackathonV2.html');
    })

    const loginPage = new LoginPage();

    it('has logo', () => {
        loginPage.logo();
    })

    //muted because of the known bug JIRA-123
    it.skip('has header - JIRA-123 Wrong header', () => {
        cy.contains('Login Form');
    })

    it('has username label', () => {
        cy.contains('Username');
    })

    //muted because of the known bug JIRA-124
    it.skip('has username icon - JIRA-124 missing username icon', () => {
        loginPage.usernameIcon();
    })

    it('has username input', () => {
        loginPage.usernameInput();
    })

    it('username input placeholder is "John Smith"', () => {
        loginPage.usernameInput().should('have.attr', 'placeholder', 'John Smith');
    })

    //muted because of the known bug JIRA-125
    it.skip('has password label - JIRA-125 Pwd instead of Password', () => {
        loginPage.passwordLabel().contains('Password');
    })

    //muted because of the known bug JIRA-126
    it.skip('has password icon - JIRA-126 Missing PW icon', () => {
        loginPage.passwordIcon();
    })

    it('has password input', () => {
        loginPage.passwordInput();
    })

    it('password input placeholder is "ABC$*1@"', () => {
        loginPage.passwordInput().should('have.attr', 'placeholder', 'ABC$*1@');
    })

    it('has Log-in button', () => {
        loginPage.loginButton().contains('Log In');
    })

    it('has Remember me checkbox', () => {
        loginPage.rememberCheckbox();
    })

    it('has Remember me label', () => {
        cy.contains('Remember Me');
    })

    it('has Twitter button', () => {
        loginPage.twitterButton();
    })

    it('has Facebook button', () => {
        loginPage.facebookButton();
    })

    //muted because of the known bug JIRA-127
    it.skip('has LinkedIn button - JIRA-127 Missing LinkedIn icon', () => {
        loginPage.linkedinButton();
    })
})