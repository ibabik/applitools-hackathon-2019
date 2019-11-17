/// <reference types="Cypress" />

export class LoginPage {
    logo() {
        return cy.get('img[src="img/logo-big.png"]');
    }

    usernameIcon() {
        return cy.get('div.os-icon-user-male-circle');
    }

    usernameInput() {
        return cy.get('#username');
    }

    passwordIcon() {
        return cy.get('div.os-icon-fingerprint');
    }

    passwordLabel() {
        return cy.get('.form-group:nth-of-type(2) label');
    }

    passwordInput() {
        return cy.get('#password');
    }

    loginButton() {
        return cy.get('#log-in');
    }

    rememberCheckbox() {
        return cy.get('.form-check-input');
    }

    twitterButton() {
        return cy.get('.buttons-w img[src="img/social-icons/twitter.png"]');
    }

    facebookButton() {
        return cy.get('.buttons-w img[src="img/social-icons/facebook.png"]');
    }

    linkedinButton() {
        return cy.get('.buttons-w img[src="img/social-icons/linkedin.png"]');
    }

    inputUsernamePassword(username, password) {
        this.usernameInput().clear();
        this.passwordInput().clear();

        if (username != '') {
            this.usernameInput().type(username);
        }

        if (password != '') {
            this.passwordInput().type(password)
        }

        this.loginButton().click();
    }
}