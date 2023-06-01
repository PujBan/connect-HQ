/// <reference types = 'cypress'/>

class alertpage{

    elements ={
        pageTitle:()=> cy.get('div[class="back-btn-title"] h1'), 
        createTicket: ()=> cy.get('div[class="save-cancel-btn"] span')

    }

    verifyPageTitle(){
        this.elements.pageTitle().should('have.text', 'New Service Ticket')
    }
    clickOnCreateTicketBtn(){
        this.elements.createTicket().click()

    }

} export default alertpage;
