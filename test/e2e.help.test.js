import App from '../page_objects/App'
import LoginPage from '../page_objects/pages/LoginPage'
import HelpPage from '../page_objects/pages/HelpPage'
import NavBar from '../page_objects/components/Navbar'

describe('E2E Test - Help Tests', ()=>{
    it('Should login into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        assert.equal(true, NavBar.isLoggedInUserNavbarVisible())
    })
    it('Should load help content', ()=>{
        NavBar.clickSettings()
        NavBar.clickHelpLink()
        let heading = HelpPage.h3Heading
        expect(heading).toHaveText('How do I log into my account?')
        HelpPage.clickOnTransferFundsLink()
        expect(heading).toHaveText('How do I transfer funds?')
        HelpPage.clickOnPayBillsLink()
        expect(heading).toHaveText('How do I pay bills?')
    })
})