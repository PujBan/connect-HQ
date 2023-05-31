/// <reference types = 'cypress' />

const homepage = require('../pageObjects/homepom')
let hp 
const loginpage = require('../pageObjects/loginpom')
let login

describe('Home page', ()=>{

    hp= new homepage()
    login = new loginpage()

    beforeEach(()=>{
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
        cy.on("uncaught exception", (err, runnable) => {
            return false;
        });
    })

    it('Validate span details', ()=>{
        hp.openDeliveryOrderPackingSlipSpan()
        cy.wait(6000)
        hp.openPreview()
        hp.viewPreviewImage()
    })

    it('Go to alerts->tickets from menu', ()=>{
        hp.openMenu()
        hp.openAlertsMenu()
        // go to child pages from alert and perform actions
        cy.get('a[href="/home/alerts/new-ticket"]').click()
        cy.wait(8000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'New Service Ticket')
    })

    it('Go to alerts->group from menu', ()=>{
        hp.openMenu()
        hp.openAlertsMenu()
        // go to child pages from alert and perform actions
        cy.get('a[href="/home/alerts/group-list"]').click()
        cy.wait(8000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Group')
        cy.get('li[title="Previous Page"]').should('be.visible')
        cy.get('li[title="Next Page"] button[type="button"]').should('be.visible')
    })

    it.only('Go to alerts->service from menu', ()=>{
        hp.openMenu()
        hp.openAlertsMenu()
        // go to child pages from alert and perform actions
        cy.get('a[href="/home/alerts/service-list"]').click()
        cy.wait(8000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Service')
        cy.get('li[title="Previous Page"]').should('be.visible')
        cy.get('li[title="Next Page"] button[type="button"]').should('be.visible')
    })

})