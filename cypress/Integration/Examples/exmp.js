/// <reference types = 'cypress'/>
const homepage = require('../pageObjects/homepom')
let hp
const loginpage = require('../pageObjects/loginpom')
let login

describe('Test Suite 1', ()=>{
    login = new loginpage()
    hp = new homepage()

    it('Login', ()=> {
        cy.visit('https://openid.qaconnecthq.live/Identity/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%3Frequest_id%3D56CTJdHXypRiL8pKXK12K_CqaP1Gw_kDxw7GEox4ef0')
        cy.wait(6000)
        cy.get('[alt="logo"]').should('be.visible')
        login.enterEmail(Cypress.env('username'));
        login.enterPassword(Cypress.env('password'));
        login.clickLoginBtn();
        cy.wait(6000)
        cy.on("uncaught exception", (err, runnable) => {
            return false;
          });
        cy.visit('https://pwa.qaconnecthq.live/')  
        cy.on("uncaught exception", (err, runnable) => {
            return false;
          });
            
        })

    // it('Login with another method', ()=>{

    //   cy.on('window:before:load', (win) => {
    //     win.__location = {
    //       replace: cy.stub().as('replace')
    //     }
    //   })

    // })    
})

describe('Test Suite 2',()=>{
  it('Home page', ()=>{
    cy.visit('https://openid.qaconnecthq.live/Identity/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%3Frequest_id%3D56CTJdHXypRiL8pKXK12K_CqaP1Gw_kDxw7GEox4ef0')
        cy.wait(6000)
        cy.get('[alt="logo"]').should('be.visible')
        login.enterEmail(Cypress.env('username'));
        login.enterPassword(Cypress.env('password'));
        login.clickLoginBtn();
        cy.wait(6000)
        cy.on("uncaught exception", (err, runnable) => {
            return false;
          });
        cy.visit('https://pwa.qaconnecthq.live/')  
        cy.on("uncaught exception", (err, runnable) => {
            return false;
          });
            hp.openDeliveryOrderPackingSlipSpan()
            cy.wait(6000)
            hp.openPreview()
            hp.viewPreviewImage()


  })
})