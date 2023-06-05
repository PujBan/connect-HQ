/// <reference types = 'cypress'/>

class homepage{

    elements = {
    deliveryOrderPackingSlipsspan : () => cy.get(':nth-child(1) > .ant-collapse-header > .ant-collapse-header-text'),
    clickOnPreviewItem: ()=> cy.get(':nth-child(1) > .ant-image-mask'),
    viewPreview: ()=> cy.get('.ant-image-preview-img'),
    clickOnMenu: ()=> cy.get('div[class="hamburger"] div:nth-child(2)'),
    clickOnAlertsMenu: ()=> cy.get(':nth-child(1) > .ant-menu-submenu-title > .ant-menu-title-content'),
    newTicket:() => cy.get('a[href="/home/alerts/new-ticket"]'),
    group:()=> cy.get('a[href="/home/alerts/group-list"]'),
    service:()=>cy.get('a[href="/home/alerts/service-list"]'),
    clickOnCashMenu: ()=> cy.get(":nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content"),
    cashTicket:()=> cy.get('a[href="/home/cash/cash-ticket-list"]'),
    cashHistory:()=> cy.get('a[href="/home/cash/cash-ticket-history"]'),
    cashInput:()=>cy.get('a[href="/home/cash/cash-input"]'),
    cashImport:()=>cy.get('a[href="/home/cash/cash-import"]')
    }

    openDeliveryOrderPackingSlipSpan(){
        cy.wait(6000)
        this.elements.deliveryOrderPackingSlipsspan().click();
        cy.get('.ant-collapse-content-box', {timeout:60000}).should(($x) => {
            expect($x).to.have.class('ant-collapse-content-box');

        })  
    }
    openPreview(){
        this.elements.clickOnPreviewItem().click()
    }
    viewPreviewImage(){
        this.elements.viewPreview().should('be.visible')
        cy.wait(6000)
        cy.reload()
        cy.get('.ant-layout-content.site-layout-background', {timeout:60000}).should(($x) => {
                    expect($x).to.have.class('ant-layout-content site-layout-background');
        })
        cy.wait(60000)
    }
    openMenu(){
        this.elements.clickOnMenu().click()
    }
    openAlertsMenu(){
        this.elements.clickOnAlertsMenu().click()        
    }
    openNewTicketPage(){
        this.elements.newTicket().click()
    }
    opengrouppage(){
        this.elements.group().click()
    }
    openServicePage(){
        this.elements.service().click()

    }
    openCashMenu(){
        this.elements.clickOnCashMenu().click()        
    }
    openCashTicket(){
        this.elements.cashTicket().click()  
    }
    openCashHistory(){
        this.elements.cashHistory().click()  
    }
    openCashInput(){
        this.elements.cashInput().click()  
    }
    openCashImport(){
        this.elements.cashImport().click()  
    }

    
    
} export default homepage;