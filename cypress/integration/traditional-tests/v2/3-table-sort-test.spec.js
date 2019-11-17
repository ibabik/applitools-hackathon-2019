/// <reference types="Cypress" />
import { LoginPage } from '../../../page-objects/login-page'
import { AppPage } from '../../../page-objects/app-page'

describe('Amounts column', () => {
    const appPage = new AppPage();

    beforeEach(() => {
        const loginPage = new LoginPage();

        cy.visit('/hackathonV2.html');

        loginPage.inputUsernamePassword('Mopsy', 'the.0ldest');
        cy.contains('Recent Transactions');
    })

    //muted because of the known bug JIRA-128
    it.skip('should have ascending order - JIRA-128 Sort order should be ascending', () => {
        let min = Number.MIN_SAFE_INTEGER;

        appPage.amountHeader().click();

        appPage
            .getColumnByIndex(5)
            .each(($td) => {
                let text = $td
                    .text()
                    .trim();

                text = text
                    .substring(0, text.lastIndexOf(' '))
                    .replace(',', '')
                    .replace(' ', '');

                let amount = Number(text);
                expect(amount).to.be.greaterThan(min);
                min = amount;
            })
    })

    it('row data should stay in tact after sorting', () => {
        const transactions = appPage.getTransactionRows();
        appPage.amountHeader().click();

        cy
            .get(appPage.transactionRow())
            .each(($tr) => {
                const text = $tr.text();
                expect(transactions).to.contain(text);
            });
    })
})