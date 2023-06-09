/// <reference types = 'cypress' />

class cashPage{
    elements = {
        tablController:() => cy.xpath('//*[name()="path" and contains(@fill,"currentCol")]'),
        save:()=> cy.xpath('//span[normalize-space()="Save"]'),
        filter:()=> cy.xpath('(//*[name()="svg"])[8]'),
        go:()=>cy.xpath('(//button[@type="submit"])[2]'),
        reset:()=>cy.xpath('(//span[normalize-space()="Reset Filter"])[1]'),
        clsfilter:()=> cy.xpath('//span[@aria-label="close"]//*[name()="svg"]')

    }
    openTableController(){
        this.elements.tablController().click()
    }
    saveTablechanges(){
        this.elements.save().click()
    }
    openFilter(){
        this.elements.filter().click()
    }
    clickOnGoButton(){
        this.elements.go().click()
    }
    clickOnresetButton(){
        this.elements.reset().click()
    }
    closeFilter(){
        this.elements.clsfilter().click() 
    }


} export default cashPage;