class login {

    elements = {
    email: () => cy.get('#Input_Username'),
    password: () => cy.get('#Input_Password'),
    loginBtn: () => cy.get('#login-submit')
    }
    email() {
    this.elements.email().type('maulik.j@simformsolutions.com');
    }
    password(){
    this.elements.password().type('Maulik@123');
     }
     loginBtn(){
        this.elements.loginBtn().click();
     }
    
    }
    export default login;