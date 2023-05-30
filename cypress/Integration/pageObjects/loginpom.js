/// <reference types = 'cypress'/>

class loginpage {

    elements = {
    email: () => cy.get('#Input_Username'),
    password: () => cy.get('#Input_Password'),
    loginBtn: () => cy.get('#login-submit'),
    emailValidation:() => cy.get('#account > div:nth-child(1) > span'),
    passwordValidation:()=> cy.get('#account > div:nth-child(2) > span'),
    invalidCredentials:() => cy.get('.validation-summary-errors > ul > li'),
    }

    enterEmail(email) {
    this.elements.email().type(email);
    }
    enterPassword(password){
    this.elements.password().type(password);
     }
    clickLoginBtn(){
    this.elements.loginBtn().click();
     }
    requiredEmail(){
    this.elements.emailValidation().should('contain.text', 'The Email field is required');
    } 
    requiredPassword(){
    this.elements.passwordValidation().should('contain.text', 'The Password field is required.');
    } 
    invalidPassword(){
        this.elements.invalidCredentials().should('contain.text', 'Your credentials are incorrect')
    }
    invalidEmailid(){
        this.elements.invalidCredentials().should('contain.text', 'No such user exists, please enter valid credentials') 
    }  
}
    export default loginpage;   // define as export to import this class in test files