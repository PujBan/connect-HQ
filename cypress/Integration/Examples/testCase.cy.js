/// <reference types = 'cypress'/>
 
import { beforeEach } from "mocha"
import login from "../POM/loginpom"

// after (()=>{
//     cy.origin('https://pwa.qaconnecthq.live/')
// })

describe('Test Suite', ()=>{

    //  beforeEach(()=>{
    //      cy.origin('https://openid.qaconnecthq.live/Identity/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%3Frequest_id%3D_aeIKJUMUT-J0tBSg_Kcg6jwlk245GVo0bA0Q75Xsvk')
    //      cy.wait(6000)
    //        const lp = new login()
    //         lp.email();
    //         lp.password();
    //         lp.loginBtn();
    //         cy.on
    // })
    it('Login page', ()=>{
        cy.visit('https://pwa.qaconnecthq.live/')
        cy.wait(6000)
          const lp = new login()
           lp.email();
           lp.password();
           lp.loginBtn();
           cy.on('uncaught:exception', (err, runnable) => {

            return false
                
            })

    })

    // it('Home page', ()=>{
    //     cy.origin('https://pwa.qaconnecthq.live/')

    // })

})