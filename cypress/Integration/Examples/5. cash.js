/// <reference types = 'cypress' />

const homepage = require('../pageObjects/homepom')
let hp
const loginpage = require('../pageObjects/loginpom')
let login
const alertpage = require('../pageObjects/alertsticketspom')
let ap
const cashpage = require('../pageObjects/cashpom')
let cp
    hp = new homepage()
    login = new loginpage()
    ap = new alertpage()
    cp = new cashpage()


describe('Test Suite 1', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
        cy.visit(Cypress.env('baseURL'))
        //cy.viewport(1440, 990)
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

    it.only('Open cash ticket list', () => {
        hp.openCashTicket()
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Cash Ticket List')
    })
    it('Table Rearrange', () => {
        hp.openCashTicket()
        cp.openTableController()
        cy.wait(6000)
        //verify pop-up title
        cy.xpath('//div[@id=":r0:"]').should('have.text', 'Table Rearrange')
    })
    it('Remove ticket number from table', () => {
        hp.openCashTicket()
        //before Rearrange table
        cy.xpath('//span[normalize-space()="Ticket No"]').should('be.visible')
        //Rearrange table
        cp.openTableController()
        //uncheck ticket no checkbox
        cy.xpath('(//input[@type="checkbox"])[1]').uncheck()
        //click on save button
        cp.saveTablechanges()
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
        cp.openTableController()
        //uncheck driver checkbox
        cy.xpath('(//input[@type="checkbox"])[2]').uncheck()
        //click on save button
        cp.saveTablechanges()
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
        cp.openTableController()
        //uncheck Route checkbox
        cy.xpath('(//input[@type="checkbox"])[3]').uncheck()
        //click on save button
        cp.saveTablechanges()
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
        cp.openTableController()
        //uncheck AssetID checkbox
        cy.xpath('(//input[@type="checkbox"])[4]').uncheck()
        //click on save button
        cp.saveTablechanges()
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
        cp.openTableController()
        //uncheck Device checkbox
        cy.xpath('(//input[@type="checkbox"])[5]').uncheck()
        //click on save button
        cp.saveTablechanges()
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
        cp.openTableController()
        //uncheck Location/place checkbox
        cy.xpath('(//input[@type="checkbox"])[6]').uncheck()
        //click on save button
        cp.saveTablechanges()
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
        cp.openTableController()
        //uncheck Type checkbox
        cy.xpath('(//input[@type="checkbox"])[7]').uncheck()
        //click on save button
        cp.saveTablechanges()
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
        cp.openTableController()
        //uncheck Sales checkbox
        cy.xpath('(//input[@type="checkbox"])[8]').uncheck()
        //click on save button
        cp.saveTablechanges()
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
        cp.openTableController()
        //uncheck Visittime checkbox
        cy.xpath('(//input[@type="checkbox"])[9]').uncheck()
        //click on save button
        cp.saveTablechanges()
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
        cp.openTableController()
        //uncheck Previous checkbox
        cy.xpath('(//input[@type="checkbox"])[10]').uncheck()
        //click on save button
        cp.saveTablechanges()
        cy.wait(6000)
        //verify table
        cy.xpath('//th[@class="ant-table-cell"]').should('not.contain.text', 'Previous')
        cy.reload()
        cy.wait(5000)
        //after reload table arranged as it is
        cy.xpath('(//div[@class="ant-table-column-sorters"])[10]').should('contain.text', 'Previous')
    })
    it('Remove Action from table', () => {
        hp.openCashTicket()
        //before Rearrange table
        cy.xpath('//th[@class="ant-table-cell"]').should('contain.text', 'Action')
        //Rearrange table
        cp.openTableController()
        //uncheck Action checkbox
        cy.xpath('(//input[@type="checkbox"])[11]').uncheck()
        //click on save button
        cp.saveTablechanges()
        //verify table
        cy.xpath('(//span[normalize-space()="Previous"])[1]').should('not.contain.text', 'Action')
        cp.openTableController()
        //check Action checkbox
        cy.xpath('(//input[@type="checkbox"])[11]').check()
        cp.saveTablechanges()
        cy.xpath('//th[@class="ant-table-cell"]').should('contain.text', 'Action')
    })
    it("Date wise filter", ()=>{
        hp.openCashTicket()
        cy.wait(6000)
        cp.openFilter()
        //get date picker
        cy.get('#basic_ScheduleDate').click()
        //get calander
        cy.get('.ant-picker-dropdown.ant-picker-dropdown-placement-bottomLeft')
        //select today
        cy.get('.ant-picker-footer').click()
        //clear date field
        cy.get('.ant-picker').clear()
        //Select random date
        cy.get('[title="2023-06-06"]').click()
        //click on go button
        cp.clickOnGoButton()
        
    })
    it("Reset filter without closing", ()=>{
        hp.openCashTicket()
        cy.wait(5000)
        cp.openFilter()
        //get date picker
        cy.get('#basic_ScheduleDate').click()
        //Select random date
        cy.get('[title="2023-06-06"]').click()
        // reset filter
        cp.clickOnresetButton()
        //verify date field should be empty after reset
        cy.get('#basic_ScheduleDate').should('be.empty')
    })
    it("Reset filter after closing", ()=>{
        hp.openCashTicket()
        cy.wait(5000)
        cp.openFilter()
        //get date picker
        cy.get('#basic_ScheduleDate').click()
        //get calander
        cy.get('.ant-picker-dropdown.ant-picker-dropdown-placement-bottomLeft')
        //Select random date
        cy.get('[title="2023-06-06"]').click()
        //click on go button
        cp.clickOnGoButton()
        cp.openFilter()
        // reset filter
        cp.clickOnresetButton()
        //verify date field should be empty after reset
        cy.get('#basic_ScheduleDate').should('be.empty')
    })
    it('Select past date', ()=>{
        hp.openCashTicket()
        cy.wait(5000)
        cp.openFilter()
        //get date picker
        cy.get('#basic_ScheduleDate').click()
        //click on header
        cy.get('.ant-picker-header-view').dblclick()
        //select year 2020
        cy.xpath('//div[normalize-space()="2020"]').click()
        //go forward for month
        cy.xpath('//span[@class="ant-picker-prev-icon"]').click()
        //select date
        cy.xpath('//div[normalize-space()="22"]').click()
        //click on go button
        cp.clickOnGoButton()
    })
    it('Select future date', ()=>{
        hp.openCashTicket()
        cy.wait(5000)
        cp.openFilter()
        //get date picker
        cy.get('#basic_ScheduleDate').click()
        //click on header
        cy.get('.ant-picker-header-view').dblclick()
        //select year 2025
        cy.xpath('//div[normalize-space()="2025"]').click()
        //go forward for month
        cy.xpath('//button[@class="ant-picker-header-next-btn"]').click()
        //select date
        cy.xpath('(//div[@class="ant-picker-cell-inner"][normalize-space()="2"])[1]').click()
        //click on go button
        cp.clickOnGoButton()
    })
    it('Close filter', ()=>{
        hp.openCashTicket()
        cy.wait(5000)
        cp.openFilter()
        cp.closeFilter()
        //verify heading
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Cash Ticket List')
    })

})

describe('Test Suite 2', ()=>{
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage
        cy.visit(Cypress.env('baseURL'))
        //cy.viewport(1440, 990)
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
    it('Open cash history', ()=>{
        hp.openMenu()
        hp.openCashMenu()
        // go to child pages of Cash menu
        hp.openCashHistory()
        cy.wait(8000)
        cy.get('div[class="back-btn-title"] h1').should('have.text', 'Cash History')
    })
})
