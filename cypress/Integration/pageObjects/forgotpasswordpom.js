/// <reference types = 'cypress'/>

class forgotPasswordPage {

    elements = {
    forgotpasswordlink:()=> cy.get('.link-btn'),
    forgotpasswordpage: ()=> cy.get('.Login-text'),
    forgotpasswordtologinpage: ()=> cy.get('.link-btn'),
    redirectedtologinpage: ()=> cy.get('.Login-text'),
    invalidemail: ()=> cy.get('.form-control'),
    submitbtn: ()=> cy.get('button[type=submit]'),
    emailvalidation: ()=> cy.get('.text-danger > ul > li')
    }

    clickForgotPassword(){
        this.elements.forgotpasswordlink().should('contain.text','Forgot Password').click();
    }
    getforgotpasswordpage(){
        this.elements.forgotpasswordpage().should('contain.text','Forgot Password')
    }
    clickgotologin(){
        this.elements.forgotpasswordtologinpage().should('contain.text','Go to login').click();
    }
    getloginpage(){
        cy.wait(6000)
        this.elements.redirectedtologinpage().should('contain.text','Login')
    }
    enterInvalidEmailId(email){
        this.elements.invalidemail().type(email);
    }
    clickSubmitBtn(){
        this.elements.submitbtn().click();
    }
    validatewrongemail(){
        this.elements.emailvalidation().should('contain.text','No such user exists in the system, please enter registered email id')
   }
    
} export default forgotPasswordPage;