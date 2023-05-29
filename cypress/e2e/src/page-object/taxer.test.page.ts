export class TaxerTestPage {
    clickOnAddButton() {
        cy.get('.btn-primary').click();
    }

    dragAndDropFileByName(filePath: string){
        cy.get('dropbox.dropbox').selectFile(filePath, { action: 'drag-drop' })
    }

    verifyItemInList(expectedItemText: string){
        cy.get('.list-group-item').should('contain.text', expectedItemText);      
    }

    verifyELementTextByTitle(title: string, expectedText: string){
        // cy.get(`//div[@class='card-body']//tr[./th[contains(text(),'${title}')]]/td`).should('have.text', expectedText);
        cy.get("div.card-body tr").children("th").contains(title).parent("tr").children("td").should('have.text', expectedText)
    }
}