/// <reference types = 'cypress' />

const homepage = require('../pageObjects/homepom')
let hp
const loginpage = require('../pageObjects/loginpom')
let login
const alertpage = require('../pageObjects/alertsticketspom')
let ap
const cashpage = require('../pageObjects/cashpom')
let cp

describe('Cash Child pages', () => {

    hp = new homepage()
    login = new loginpage()
    ap = new alertpage()
    cp = new cashpage()

    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
        cy.visit(Cypress.env('baseURL'))
        cy.wait(5000)
        login.enterEmail(Cypress.env('username'));
        login.enterPassword(Cypress.env('password'));
        login.clickLoginBtn();
        cy.wait(5000)
        cy.on("uncaught exception", (err, runnable) => {
            return false;
        });
        cy.visit(Cypress.env('secondoryURL'))
        cy.wait(6000)
        cy.on("uncaught exception", (err, runnable) => {
            return false;
        });
        // Open cash menu
        hp.openMenu()
        hp.openCashMenu()
    })

    it('Open cash ticket list', () => {
        hp.openCashTicket()
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Cash Ticket List')
    })
    it('Table Rearrange', () => {
        hp.openCashTicket()
        cy.xpath('//*[name()="path" and contains(@fill,"currentCol")]').click()
        cy.wait(6000)
        //verify pop-up title
        cy.xpath('//div[@id=":r0:"]').should('have.text', 'Table Rearrange')
    })
    it('Remove ticket number from table', () => {
        hp.openCashTicket()
        //before Rearrange table
        cy.xpath('//span[normalize-space()="Ticket No"]').should('be.visible')
        //Rearrange table
        cy.xpath('//*[name()="path" and contains(@fill,"currentCol")]').click()
        //uncheck ticket no checkbox
        cy.xpath('(//input[@type="checkbox"])[1]').uncheck()
        //click on save button
        cy.xpath('//span[normalize-space()="Save"]').click()
        //verify table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[1]').should('not.contain.text', 'Ticket No')
        cy.xpath('(//div[@class="ant-table-column-sorters"])[1]').should('contain.text', 'Driver')
        cy.reload()
        cy.wait(5000)
        //after reload table arranged as it is
        cy.xpath('(//div[@class="ant-table-column-sorters"])[1]').should('contain.text', 'Ticket No')
    })
    it('Remove driver from table', () => {
        hp.openCashTicket()
        //before Rearrange table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[2]').should('contain.text', 'Driver')
        //Rearrange table
        cy.xpath('//*[name()="path" and contains(@fill,"currentCol")]').click()
        //uncheck driver checkbox
        cy.xpath('(//input[@type="checkbox"])[2]').uncheck()
        //click on save button
        cy.xpath('//span[normalize-space()="Save"]').click()
        //verify table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[1]').should('contain.text', 'Ticket No')
        cy.xpath('(//div[@class="ant-table-column-sorters"])[2]').should('not.contain.text', 'Driver')
        cy.reload()
        cy.wait(5000)
        //after reload table arranged as it is
        cy.xpath('(//div[@class="ant-table-column-sorters"])[2]').should('contain.text', 'Driver')

    })
    it('Remove Route from table', () => {
        hp.openCashTicket()
        //before Rearrange table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[3]').should('contain.text', 'Route')
        //Rearrange table
        cy.xpath('//*[name()="path" and contains(@fill,"currentCol")]').click()
        //uncheck driver checkbox
        cy.xpath('(//input[@type="checkbox"])[3]').uncheck()
        //click on save button
        cy.xpath('//span[normalize-space()="Save"]').click()
        //verify table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[3]').should('not.contain.text', 'Route')
        cy.reload()
        cy.wait(5000)
        //after reload table arranged as it is
        cy.xpath('(//div[@class="ant-table-column-sorters"])[3]').should('contain.text', 'Route')
    })
    it('Remove Asset ID from table', () => {
        hp.openCashTicket()
        //before Rearrange table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[4]').should('contain.text', 'AssetID')
        //Rearrange table
        cy.xpath('//*[name()="path" and contains(@fill,"currentCol")]').click()
        //uncheck driver checkbox
        cy.xpath('(//input[@type="checkbox"])[4]').uncheck()
        //click on save button
        cy.xpath('//span[normalize-space()="Save"]').click()
        //verify table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[4]').should('not.contain.text', 'AssetID')
        cy.reload()
        cy.wait(5000)
        //after reload table arranged as it is
        cy.xpath('(//div[@class="ant-table-column-sorters"])[4]').should('contain.text', 'AssetID')
    })
    it('Remove Device from table', () => {
        hp.openCashTicket()
        //before Rearrange table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[5]').should('contain.text', 'Device')
        //Rearrange table
        cy.xpath('//*[name()="path" and contains(@fill,"currentCol")]').click()
        //uncheck driver checkbox
        cy.xpath('(//input[@type="checkbox"])[5]').uncheck()
        //click on save button
        cy.xpath('//span[normalize-space()="Save"]').click()
        //verify table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[5]').should('not.contain.text', 'Device')
        cy.reload()
        cy.wait(5000)
        //after reload table arranged as it is
        cy.xpath('(//div[@class="ant-table-column-sorters"])[5]').should('contain.text', 'Device')
    })
    it('Remove Location / Place from table', () => {
        hp.openCashTicket()
        //before Rearrange table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[6]').should('contain.text', 'Location / Place')
        //Rearrange table
        cy.xpath('//*[name()="path" and contains(@fill,"currentCol")]').click()
        //uncheck driver checkbox
        cy.xpath('(//input[@type="checkbox"])[6]').uncheck()
        //click on save button
        cy.xpath('//span[normalize-space()="Save"]').click()
        //verify table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[6]').should('not.contain.text', 'Location / Place')
        cy.reload()
        cy.wait(5000)
        //after reload table arranged as it is
        cy.xpath('(//div[@class="ant-table-column-sorters"])[6]').should('contain.text', 'Location / Place')
    })
    it('Remove Type from table', () => {
        hp.openCashTicket()
        //before Rearrange table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[7]').should('contain.text', 'Type')
        //Rearrange table
        cy.xpath('//*[name()="path" and contains(@fill,"currentCol")]').click()
        //uncheck driver checkbox
        cy.xpath('(//input[@type="checkbox"])[7]').uncheck()
        //click on save button
        cy.xpath('//span[normalize-space()="Save"]').click()
        //verify table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[7]').should('not.contain.text', 'Type')
        cy.reload()
        cy.wait(5000)
        //after reload table arranged as it is
        cy.xpath('(//div[@class="ant-table-column-sorters"])[7]').should('contain.text', 'Type')
    })
    it('Remove Sales from table', () => {
        hp.openCashTicket()
        //before Rearrange table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[8]').should('contain.text', 'Sales')
        //Rearrange table
        cy.xpath('//*[name()="path" and contains(@fill,"currentCol")]').click()
        //uncheck driver checkbox
        cy.xpath('(//input[@type="checkbox"])[8]').uncheck()
        //click on save button
        cy.xpath('//span[normalize-space()="Save"]').click()
        //verify table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[8]').should('not.contain.text', 'Sales')
        cy.reload()
        cy.wait(5000)
        //after reload table arranged as it is
        cy.xpath('(//div[@class="ant-table-column-sorters"])[8]').should('contain.text', 'Sales')
    })
    it('Remove Visit Time from table', () => {
        hp.openCashTicket()
        //before Rearrange table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[9]').should('contain.text', 'Visit Time')
        //Rearrange table
        cy.xpath('//*[name()="path" and contains(@fill,"currentCol")]').click()
        //uncheck driver checkbox
        cy.xpath('(//input[@type="checkbox"])[9]').uncheck()
        //click on save button
        cy.xpath('//span[normalize-space()="Save"]').click()
        //verify table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[9]').should('not.contain.text', 'Visit Time')
        cy.reload()
        cy.wait(5000)
        //after reload table arranged as it is
        cy.xpath('(//div[@class="ant-table-column-sorters"])[9]').should('contain.text', 'Visit Time')
    })
    it('Remove Previous from table', () => {
        hp.openCashTicket()
        //before Rearrange table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[10]').should('contain.text', 'Previous')
        //Rearrange table
        cy.xpath('//*[name()="path" and contains(@fill,"currentCol")]').click()
        //uncheck driver checkbox
        cy.xpath('(//input[@type="checkbox"])[10]').uncheck()
        //click on save button
        cy.xpath('//span[normalize-space()="Save"]').click()
        //verify table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[10]').should('not.contain.text', 'Previous')
        cy.reload()
        cy.wait(5000)
        //after reload table arranged as it is
        cy.xpath('(//div[@class="ant-table-column-sorters"])[10]').should('contain.text', 'Previous')
    })
    it('Remove Action from table', () => {
        hp.openCashTicket()
        //before Rearrange table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[11]').should('contain.text', 'Action')
        //Rearrange table
        cy.xpath('//*[name()="path" and contains(@fill,"currentCol")]').click()
        //uncheck driver checkbox
        cy.xpath('(//input[@type="checkbox"])[11]').uncheck()
        //click on save button
        cy.xpath('//span[normalize-space()="Save"]').click()
        //verify table
        cy.xpath('(//div[@class="ant-table-column-sorters"])[11]').should('not.contain.text', 'Action')
        cy.reload()
        cy.wait(5000)
        //after reload table arranged as it is
        cy.xpath('(//div[@class="ant-table-column-sorters"])[11]').should('contain.text', 'Action')
    })
})
