/// <reference types="Cypress" />
import { LoginPage } from '../../../page-objects/login-page'
import { AppPage } from '../../../page-objects/app-page'

describe('Canvas chart', () => {
    const appPage = new AppPage();

    beforeEach(() => {
        const loginPage = new LoginPage();

        cy.visit(Cypress.env('isV1') ? '/hackathon.html' : '/hackathonV2.html');

        loginPage.inputUsernamePassword('Flopsy', 'NOT.the.oldest');
        cy.contains('Recent Transactions');

        appPage.compareExpensesBtn().click();
        cy.contains('Show data for next year');
    })

    it('2-year data and styles are correct', () => {
        cy.window().then((window) => {
            const actualData = window.barChartData;
            expect(appPage.compareChartData(expectedData2years, actualData)).to.be.true;
        });
    })

    it('3-year data and styles are correct', () => {
        appPage.addDataSetBtn().click();

        cy.window().then((window) => {
            const actualData = window.barChartData;
            expect(appPage.compareChartData(expectedData3years, actualData)).to.be.true;
        });
    })

    const expectedData2years = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            { label: '2017', backgroundColor: 'rgba(255, 99, 132, 0.5)', borderColor: 'rgb(255, 99, 132)', borderWidth: 1, data: [10, 20, 30, 40, 50, 60, 70] },
            { label: '2018', backgroundColor: 'rgba(54, 162, 235, 0.5)', borderColor: 'rgb(54, 162, 235)', borderWidth: 1, data: [8, 9, -10, 10, 40, 60, 40] }
        ]
    };

    const expectedData3years = { ...expectedData2years };
    expectedData3years.datasets = [...expectedData3years.datasets];
    expectedData3years.datasets.push({ label: '2019', backgroundColor: 'rgba(255, 205, 86, 0.5)', borderColor: 'rgb(255, 205, 86)', borderWidth: 1, data: [5, 10, 15, 20, 25, 30, 35] });
})