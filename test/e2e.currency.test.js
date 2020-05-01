import App from '../page_objects/App'
import LoginPage from '../page_objects/pages/LoginPage'
import PaybillsPage from '../page_objects/pages/PaybillsPage'
import NavBar from '../page_objects/components/Navbar'
import LoggedInNavbar from '../page_objects/components/LoggedInNavbar'

describe('E2E Test - Search', ()=> {
    it('Should login into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        assert.equal(true, NavBar.isLoggedInUserNavbarVisible())
    })
    it('Should make currency exchange', () => {
        LoggedInNavbar.clickPaybillsTab()
        LoggedInNavbar.clickPurchaseForeignCurrencyTab()
        PaybillsPage.selectCurrencyDropdown('value','EUR')
        PaybillsPage.fillAmount('300')
        PaybillsPage.clickDollarRadioButton()
        PaybillsPage.clickPurchaseButton()
        PaybillsPage.isResultMessageVisible()
        let message = PaybillsPage.resultContainer
        expect(message).toHaveText('×\nForeign currency cash was successfully purchased.')
        // assert.equal(message.getText().trim(), '×\nForeign currency cash was successfully purchased.')
    })
})