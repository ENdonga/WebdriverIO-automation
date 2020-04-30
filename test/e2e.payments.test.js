import App from '../page_objects/App'
import LoginPage from '../page_objects/pages/LoginPage'
import PaybillsPage from '../page_objects/pages/PaybillsPage'
import NavBar from '../page_objects/components/Navbar'
import LoggedInNavbar from '../page_objects/components/LoggedInNavbar'

describe('E2E Test - Payments', ()=>{
    it('Should login into application', () => {
        App.openLoginPage()
        browser.maximizeWindow()
        LoginPage.login('username', 'password')
        assert.equal(true, NavBar.isLoggedInUserNavbarVisible())
    })
    it('Should make payments', ()=>{
        LoggedInNavbar.clickPaybillsTab()
        PaybillsPage.selectPayeeDropdown('value', 'apple')
        PaybillsPage.selectAccountDropdown('Savings')
        PaybillsPage.fillPayeeTabAmount('300')
        PaybillsPage.fillDate('2020-04-20')
        PaybillsPage.fillDescription('This is a test')
        PaybillsPage.clickPayButton()
        PaybillsPage.isResultMessageVisible()
        let message = PaybillsPage.resultContainer
        expect(message).toHaveText('×\nThe payment was successfully submitted.')
    })
})