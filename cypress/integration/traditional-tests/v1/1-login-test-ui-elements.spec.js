/// <reference types="Cypress" />
import { LoginPage } from '../../../page-objects/login-page'

describe('Login page', () => {
    const loginPage = new LoginPage();

    before(() => {
        cy.visit(Cypress.env('isV1') ? '/hackathon.html' : '/hackathonV2.html');
    })

    it('has logo', () => {
        loginPage.logo();
    })

    it('has header', () => {
        cy.contains('Login Form');
    })

    it('has username label', () => {
        cy.contains('Username');
    })

    it('has username icon', () => {
        loginPage.usernameIcon();
    })

    it('has username input', () => {
        loginPage.usernameInput();
    })

    it('username input placeholder is "Enter your username"', () => {
        loginPage.usernameInput().should('have.attr', 'placeholder', 'Enter your username');
    })

    it('has password label', () => {
        loginPage.passwordLabel().contains('Password');
    })

    it('has password icon', () => {
        loginPage.passwordIcon();
    })

    it('has password input', () => {
        loginPage.passwordInput();
    })

    it('password input placeholder is "Enter your password"', () => {
        loginPage.passwordInput().should('have.attr', 'placeholder', 'Enter your password');
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

    it('has LinkedIn button', () => {
        loginPage.linkedinButton();
    })
})