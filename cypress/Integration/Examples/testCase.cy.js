/// <reference types = 'cypress'/>
 
const loginpage = require('../pageObjects/loginpom')
let login

describe('login page', ()=>{

    login = new loginpage()

    beforeEach(()=>{
        cy.visit(Cypress.env('URL'))
        cy.get('img[alt=logo]')
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
    // it('User login', ()=>{
    //     //const login = new login()
    //     login.enterEmail(Cypress.env('username'));
    //     login.enterPassword(Cypress.env('password'));
    //     login.clickloginBtn();
    //     cy.on('uncaught:exception', (err, runnable) => {
    //         return false 
    //         })
    // })

})