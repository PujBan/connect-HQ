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
        cy.visit(Cypress.env('secondoryURL'))  
        cy.on("uncaught exception", (err, runnable) => {
            return false;
        });
    })

    it('Validate new features details', ()=>{
        hp.openDeliveryOrderPackingSlipSpan()
        cy.wait(6000)
        hp.closeDeliveryOrderPackingSlipSpan()

    })
})