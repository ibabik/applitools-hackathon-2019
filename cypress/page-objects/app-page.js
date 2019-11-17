/// <reference types="Cypress" />

export class AppPage {
    amountHeader() {
        return cy.get('#amount');
    }

    getColumnByIndex(index) {
        return cy.get(`#transactionsTable tbody td:nth-child(${index}) span`);
    }

    getTransactionRows() {
        const rows = [];
        cy
            .get('#transactionsTable tbody tr')
            .each(($tr) => {
                const text = $tr.text();
                rows.push(text);
            });

        return rows;
    }

    transactionRow() {
        return '#transactionsTable tbody tr';
    }

    compareExpensesBtn() {
        return cy.get('#showExpensesChart');
    }

    addDataSetBtn() {
        return cy.get('#addDataset');
    }

    compareChartData(expectedData, actualData) {
        if (this.compareArrays(expectedData.labels, actualData.labels) == false) return false;
        if (expectedData.datasets.length != actualData.datasets.length) return false;
        for (let i = 0; i < expectedData.datasets.length; i++) {
            const expectedElement = expectedData.datasets[i];
            const actualElement = actualData.datasets[i];
            if (this.compareProps(expectedElement, actualElement, 'label') == false) return false;
            if (this.compareProps(expectedElement, actualElement, 'backgroundColor') == false) return false;
            if (this.compareProps(expectedElement, actualElement, 'borderColor') == false) return false;
            if (this.compareProps(expectedElement, actualElement, 'borderWidth') == false) return false;
            if (this.compareArrays(expectedElement.data, actualElement.data) == false) return false;
        }
        return true;
    }

    compareProps(object1, object2, property) {
        return object1[property] == object2[property];
    }

    compareArrays(array1, array2) {
        return (array1.length == array2.length) && array1.every((value, index) => value == array2[index]);
    }

    flashSaleBanner() {
        return cy.get('#flashSale img');
    }

    flashSale2Banner() {
        return cy.get('#flashSale2 img');
    }
}