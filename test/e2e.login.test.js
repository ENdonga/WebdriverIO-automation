import App from '../page_objects/App'
import LoginPage from '../page_objects/pages/LoginPage'
import Navbar from '../pages_objects/components/Navbar'

describe('E2E Tests- Login logout flow', ()=>{
    it('Should not login with invalid credentials', ()=>{
        App.openHomepage()
        browser.maximizeWindow()
        Navbar.clickSignIn()
        LoginPage.isFormVisible()
        LoginPage.fillForm('invalid','invalid')
        LoginPage.submitForm()
        let message = LoginPage.getError()
        expect(message).toHaveText('Login and/or password are wrong.')
    })
    it('Should login with valid credentials', ()=>{
        App.openHomepage()
        Navbar.clickSignIn()
        LoginPage.isFormVisible()
        LoginPage.fillForm('username','password')
        LoginPage.submitForm()
        assert.equal(true, Navbar.isLoggedInUserNavbarVisible())
    })
    it('Should logout from application', ()=>{
        App.logout()
        assert.equal(true, Navbar.isSigninButtonVisible())
    })
})