/// <reference types = 'cypress'/>

class alertpage{

    elements ={
        pageTitle:()=> cy.get('div[class="back-btn-title"] h1'), 
        createTicket: ()=> cy.get('div[class="save-cancel-btn"] span'),
        appliesTO: ()=> cy.get('[id="basic_Applies to"]'),
        category:()=> cy.get('[id="basic_Category"]'),
        description:()=> cy.get('[id="basic_description"]'),
        contactName: ()=>cy.get('[id="basic_Contact Name"]'),
        contactPhone:()=> cy.get('[id="basic_Contact Phone"]'),
        contactEmail:()=> cy.get('[id="basic_Contact Email"]'),
        assignTo:()=> cy.get('[id="basic_Assign To"]'),


    }

    verifyPageTitle(){
        this.elements.pageTitle().should('have.text', 'New Service Ticket')
    }
    clickOnCreateTicketBtn(){
        this.elements.createTicket().click()

    }
    enterAppliesTo(appliesTo1){
        this.elements.appliesTO().type(appliesTo1)
    }
    enterCategory(category1){
        this.elements.category().type(category1)
    }
    enterDescription(description1){
        this.elements.description().type(description1)
    }
    enterContactName(contactName1){
        this.elements.contactName().type(contactName1)
    }
    enterContactPhone(contactPhone1){
        this.elements.contactPhone().type(contactPhone1)
    }
    enterContactEmail(contactEmail1){
        this.elements.contactEmail().type(contactEmail1)
    }
    assignTo(assignTo1){
        this.elements.assignTo().click()
        cy.get('div[title="User 1"] div[class="ant-select-item-option-content"]').click()
    }

} export default alertpage;
