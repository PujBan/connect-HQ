/// <reference types = 'cypress' />

const homepage = require('../pageObjects/homepom')
let hp
const loginpage = require('../pageObjects/loginpom')
let login

describe('Home page', () => {

    hp = new homepage()
    login = new loginpage()

    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
        cy.visit(Cypress.env('baseURL'))
        cy.wait(6000)
        cy.get('[alt="logo"]').should('be.visible')
        cy.url().should('include', 'openid.qaconnecthq.live')
        login.enterEmail(Cypress.env('username'));
        login.enterPassword(Cypress.env('password'));
        login.clickLoginBtn();
        cy.wait(6000)
        cy.on("uncaught exception", (err, runnable) => {
            return false;
        });
        cy.visit(Cypress.env('secondoryURL'))
        cy.wait(6000)
        cy.getCookie('ai_user').should('exist')
        cy.on("uncaught exception", (err, runnable) => {
            return false;
        });

    })

    it('Validate span details', () => {
        hp.openDeliveryOrderPackingSlipSpan()
        cy.wait(6000)
        hp.openPreview()
        hp.viewPreviewImage()
    })

    it('Go to alerts->tickets from menu', () => {
        hp.openMenu()
        hp.openAlertsMenu()
        // go to child pages from alert and perform actions
        hp.openNewTicketPage()
        cy.wait(8000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'New Service Ticket')
    })

    it('Go to alerts->group from menu', () => {
        hp.openMenu()
        hp.openAlertsMenu()
        // go to child pages from alert and perform actions
        hp.opengrouppage()
        cy.wait(8000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Group')
        cy.get('li[title="Previous Page"]').should('be.visible')
        cy.get('li[title="Next Page"] button[type="button"]').should('be.visible')
    })

    it('Go to alerts->service from menu', () => {
        hp.openMenu()
        hp.openAlertsMenu()
        // go to child pages of alerts menu
        hp.openServicePage()
        cy.wait(8000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Service')
        cy.get('li[title="Previous Page"]').should('be.visible')
        cy.get('li[title="Next Page"] button[type="button"]').should('be.visible')
    })

    it('Go to cash->Cash ticket list from menu', () => {
        hp.openMenu()
        hp.openCashMenu()
        // go to child pages of Cash menu
        hp.openCashTicket()
        cy.wait(8000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Cash Ticket List')
        cy.get('li[title="Previous Page"]').should('be.visible')
        cy.get('li[title="Next Page"] button[type="button"]').should('be.visible')
    })
    it('Go to cash->Cash History from menu', () => {
        hp.openMenu()
        hp.openCashMenu()
        // go to child pages of Cash menu
        hp.openCashHistory()
        cy.wait(8000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Cash History')
        cy.get('li[title="Previous Page"]').should('be.visible')
        cy.get('li[title="Next Page"] button[type="button"]').should('be.visible')
    })

    it('Go to cash->Cash Input from menu', () => {
        hp.openMenu()
        hp.openCashMenu()
        // go to child pages of Cash menu
        hp.openCashInput()
        cy.wait(8000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Cash Input')
        cy.get('li[title="Previous Page"]').should('be.visible')
        cy.get('li[title="Next Page"] button[type="button"]').should('be.visible')
    })
    it('Go to cash->Cash Import from menu', () => {
        hp.openMenu()
        hp.openCashMenu()
        // go to child pages of Cash menu
        hp.openCashImport()
        cy.wait(8000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Cash Import')
    })

})