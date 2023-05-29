import { TaxerTestPage } from "./src/page-object/taxer.test.page";
import { TestAppPage } from "./src/page-object/test-app.page";

const testAppPage = new TestAppPage();
const taxerTestPage = new TaxerTestPage();

describe('Taxer cer file test suite', () => {
    beforeEach(()=>{
        cy.visit('https://js-55fbfg.stackblitz.io/');
    })
    it('Taxer test app', () => {
        testAppPage.clickOnRunThisProgectButton();
        taxerTestPage.clickOnAddButton();
        taxerTestPage.dragAndDropFileByName('cypress/fixtures/cert.cer')
        taxerTestPage.verifyItemInList('Таксер Тест Тестерович');
        taxerTestPage.verifyELementTextByTitle('SubjectCN', 'Таксер Тест Тестерович')
        taxerTestPage.verifyELementTextByTitle('IssuerCN', 'UA-22723472')
        taxerTestPage.verifyELementTextByTitle('ValidFrom', '2015-04-08 21:00:00 UTC')
        taxerTestPage.verifyELementTextByTitle('ValidTill', '2017-04-08 21:00:00 UTC')
    });
});