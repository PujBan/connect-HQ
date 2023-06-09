/// <reference types = 'cypress'/>

const forgotPasswordPage = require('../pageObjects/forgotpasswordpom')
let fp

describe('Forgot password page', ()=>{

    fp = new forgotPasswordPage()

    beforeEach(()=>{
        cy.visit(Cypress.env('baseURL'))
        cy.wait(6000)
        cy.get('[alt="logo"]').should('be.visible')
        cy.url().should('include', 'openid.qaconnecthq.live')
    })

    it('Go to forgot password', ()=>{
        fp.clickForgotPassword()
        fp.getforgotpasswordpage()
        cy.url().should('include', 'https://openid.qaconnecthq.live/Identity/Account/ForgotPassword')
    })
    // it('Required filed Validation',()=>{

    // })
    it('Invalid user',()=>{
        fp.clickForgotPassword() 
        fp.getforgotpasswordpage()
        cy.url().should('include', 'https://openid.qaconnecthq.live/Identity/Account/ForgotPassword')
        // enter email id of a invalid user
        fp.enterInvalidEmailId(Cypress.env('wrongUsername'))
        fp.clickSubmitBtn()
        fp.validatewrongemail()

    })
    it('Go to login page', ()=>{
        fp.clickForgotPassword() 
        fp.getforgotpasswordpage()
        cy.url().should('include', 'https://openid.qaconnecthq.live/Identity/Account/ForgotPassword')
        // go to login page with the link given on forgot password page
        fp.clickgotologin()
        fp.getloginpage()
        cy.url().should('include', 'https://openid.qaconnecthq.live/Identity/Account/Login')
        
    })


})