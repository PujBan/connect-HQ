/// <reference types = 'cypress'/>

const homepage = require('../pageObjects/homepom')
let hp
const loginpage = require('../pageObjects/loginpom')
let login
const alertpage = require('../pageObjects/alertsticketspom')
let ap

describe('Alerts Child pages', () => {
    hp = new homepage()
    login = new loginpage()
    ap = new alertpage()

    before(() => {
        cy.visit(Cypress.env('baseURL'))
        cy.wait(6000)
        login.enterEmail(Cypress.env('username'));
        login.enterPassword(Cypress.env('password'));
        login.clickLoginBtn();
        cy.wait(6000)
        cy.on("uncaught exception", (err, runnable) => {
            return false;
        });
        cy.visit(Cypress.env('secondoryURL'))
        cy.wait(6000)
        cy.on("uncaught exception", (err, runnable) => {
            return false;
        });
       // Open New ticket page
       cy.visit(Cypress.env('secondoryURL')+'/home/alerts/new-ticket')
        ap.verifyPageTitle()
    })

    it('Require field validation',()=>{
        ap.clickOnCreateTicketBtn()
        //Applies To
        cy.get('div[id="basic_Applies to_help"] div[class="ant-form-item-explain-error"]').should('have.text','Please enter applies to')
        //Category
        cy.get('div[id="basic_Category_help"] div[class="ant-form-item-explain-error"]').should('have.text','Please enter category')
        //Description
        cy.get('div[id="basic_description_help"] div[class="ant-form-item-explain-error"]').should('have.text','Please enter description')
        //Contact Name
        cy.get('div[id="basic_Contact Name_help"] div[class="ant-form-item-explain-error"]').should('have.text','Please enter contact name')
        //Contact Email
        cy.get('div[id="basic_Contact Email_help"] div[class="ant-form-item-explain-error"]').should('have.text','Please enter contact email')
        //Assign to
        cy.get('div[id="basic_Assign To_help"] div[class="ant-form-item-explain-error"]').should('have.text','Please select assign to')
        //Contact Phone
        cy.get('div[id="basic_Contact Phone_help"] div[class="ant-form-item-explain-error"]').should('have.text','Please enter contact phone')
    })
})