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

    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
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

    it('New ticket page Require field validation',()=>{
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
        //cy.get('div[id="basic_Contact Phone_help"] div[class="ant-form-item-explain-error"]').should('have.text','Please enter contact phone')
    })

    it('Add ticket with Asset', ()=>{
        cy.get('.ant-radio-wrapper-checked > .ant-radio > .ant-radio-input').should('be.checked').and('have.value', 'Asset')
        ap.enterAppliesTo('test')
        ap.enterCategory('test')
        ap.enterDescription('test')
        ap.enterContactName('test')
        ap.enterContactPhone(1234567890)
        ap.enterContactEmail('test@gmail.com')
        ap.assignTo('test')
        //create ticket button in not working currently, so ticket is not added
    
    })
    it('Add ticket with location', ()=>{
        cy.get('[type="radio"]').check('Location')
        ap.enterAppliesTo('test')
        ap.enterCategory('test')
        ap.enterDescription('test')
        ap.enterContactName('test')
        ap.enterContactPhone(1234567890)
        ap.enterContactEmail('test@gmail.com')
        ap.assignTo('test')
        //create ticket button in not working currently, so ticket is not added
    
    })
    it('Invalid Contact Phone', ()=>{
        cy.get('[type="radio"]').check('Location')
        ap.enterAppliesTo('test')
        ap.enterCategory('test')
        ap.enterDescription('test')
        ap.enterContactName('test')
        ap.enterContactPhone(12345)
        cy.get('.ant-form-item-explain-error').should('have.text','Please enter valid phone number')
    })
    it('Invalid Contact Email ', ()=>{
        cy.get('[type="radio"]').check('Location')
        ap.enterAppliesTo('test')
        ap.enterCategory('test')
        ap.enterDescription('test')
        ap.enterContactName('test')
        ap.enterContactPhone(1234567890)
        ap.enterContactEmail('test@gmail.')
        cy.get('.ant-form-item-explain-error').should('have.text','Enter valid email')
    })
    it('Invalid Contact Email ', ()=>{
        cy.get('[type="radio"]').check('Location')
        ap.enterAppliesTo('test')
        ap.enterCategory('test')
        ap.enterDescription('test')
        ap.enterContactName('test')
        ap.enterContactPhone(1234567890)
        ap.enterContactEmail('.test@qa.com')
        cy.get('.ant-form-item-explain-error').should('have.text','Enter valid email')
    })
    it('Invalid Contact Email ', ()=>{
        cy.get('[type="radio"]').check('Location')
        ap.enterAppliesTo('test')
        ap.enterCategory('test')
        ap.enterDescription('test')
        ap.enterContactName('test')
        ap.enterContactPhone(1234567890)
        ap.enterContactEmail('@#$%^&')
        cy.get('.ant-form-item-explain-error').should('have.text','Enter valid email')
    })
    it('Change Language to french', ()=>{
        cy.get('.ant-select-selection-item').click()
        cy.wait(5000)
        cy.get('div[title="Fr"] div[class="ant-select-item-option-content"]').click()
        cy.wait(10000)
         cy.get('div[class="back-btn-title"] h1').should('have.text', 'Nouveau ticket de service')
    })
    it('Change Language to Es', ()=>{
        cy.get('.ant-select-selection-item').click()
        cy.wait(5000)
        cy.get('div[title="Es"] div[class="ant-select-item-option-content"]').click()
        cy.wait(10000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Nuevo Ticket de Servicio')
   })

   it('Go to group page', ()=>{
        hp.openMenu()
        hp.openAlertsMenu()
        hp.opengrouppage()
        cy.wait(4000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Group')
    
    })
    it('Open create new group', ()=>{
        hp.openMenu()
        hp.openAlertsMenu()
        hp.opengrouppage()
        cy.get('button[class="ant-btn ant-btn-primary ant-btn-sm"] span').click()
        cy.wait(4000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Create Group')
    
    })
    it('Go to service page', ()=>{
        hp.openMenu()
        hp.openAlertsMenu()
        hp.openServicePage()
        cy.wait(4000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Service')
    
    })
    it('Click on add call', ()=>{
        hp.openMenu()
        hp.openAlertsMenu()
        hp.openServicePage()
        cy.wait(4000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Service')
        cy.get('button[class="ant-btn ant-btn-primary ant-btn-sm page-header-btn"] span').click()
    
    })
    it.only('Close add call', ()=>{
        hp.openMenu()
        hp.openAlertsMenu()
        hp.openServicePage()
        cy.wait(4000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Service')
        cy.wait(4000)
        cy.get('button[class="ant-btn ant-btn-primary ant-btn-sm page-header-btn"] span').click()
        cy.wait(4000)
        //close add call pop-up
        cy.get('body div button:nth-child(2)').click()
    })

})