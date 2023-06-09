/// <reference types = 'cypress'/>
 
const loginpage = require('../pageObjects/loginpom')
let login

describe('login page', ()=>{

    login = new loginpage()

    beforeEach(()=>{
        cy.visit(Cypress.env('baseURL'))
        cy.wait(6000)
        cy.get('[alt="logo"]').should('be.visible')
        cy.url().should('include', 'openid.qaconnecthq.live')
    })
    
    it('Required filed Validation', ()=>{
        login.clickLoginBtn();
        login.requiredEmail();
        login.requiredPassword();

    })
    it('Valid email invalid password', ()=>{
        login.enterEmail(Cypress.env('username'));
        login.enterPassword('ban123');
        login.clickLoginBtn();
        login.invalidPassword();

    })
    it('Invalid email valid password', ()=>{
        login.enterEmail(Cypress.env('wrongUsername'));
        login.enterPassword(Cypress.env('password'));
        login.clickLoginBtn();
        login.invalidEmailid();

    })
    it('Invalid email & password', ()=>{
        login.enterEmail(Cypress.env('wrongUsername'));
        login.enterPassword(Cypress.env('wrongPassword'));
        cy.wait(5000)
        login.clickLoginBtn();
        login.invalidEmailid();

    })
    it('User login', ()=>{
            login.enterEmail(Cypress.env('username'));
            login.enterPassword(Cypress.env('password'));
            login.clickLoginBtn();
            cy.wait(6000)
            cy.visit(Cypress.env('secondoryURL'))  
            cy.on("uncaught exception", (err, runnable) => {
                return false;
              });
    })

})