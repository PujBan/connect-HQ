/// <reference types = 'cypress'/>

class homepage{

    elements = {
    deliveryOrderPackingSlipsspan : () => cy.get(':nth-child(1) > .ant-collapse-header > .ant-collapse-header-text')
    }

    openDeliveryOrderPackingSlipSpan(){
        cy.wait(6000)
        this.elements.deliveryOrderPackingSlipsspan().click();
        cy.get('.ant-collapse-content-box', {timeout:60000}).should(($x) => {
            expect($x).to.have.class('ant-collapse-content-box');
        })
        
    }
    closeDeliveryOrderPackingSlipSpan(){
        this.elements.deliveryOrderPackingSlipsspan().click();

    }
} export default homepage;