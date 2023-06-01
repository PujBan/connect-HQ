/// <reference types = 'cypress'/>

class homepage{

    elements = {
    deliveryOrderPackingSlipsspan : () => cy.get(':nth-child(1) > .ant-collapse-header > .ant-collapse-header-text'),
    clickOnPreviewItem: ()=> cy.get(':nth-child(1) > .ant-image-mask'),
    viewPreview: ()=> cy.get('.ant-image-preview-img'),
    clickOnMenu: ()=> cy.get('.strip.hamburger-strip'),
    clickOnAlertsMenu: ()=> cy.get(':nth-child(1) > .ant-menu-submenu-title > .ant-menu-title-content'),
    clickOnCashMenu: ()=> cy.get(":nth-child(2) > .ant-menu-submenu-title > .ant-menu-title-content")
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
    }
    openMenu(){
        this.elements.clickOnMenu().click()
    }
    openAlertsMenu(){
        this.elements.clickOnAlertsMenu().click()        
    }
    openCashMenu(){
        this.elements.clickOnCashMenu().click()        
    }

    
    
} export default homepage;