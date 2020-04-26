import LoginPage from '../pages_objects/pages/login.page'
import App from '../pages_objects/App'

describe('E2E Tests- Login logout flow', ()=>{
    it('Should not login with invalid credentials', ()=>{
        App.openHomepage()
        let signinBtn = $('#signin_button')
        signinBtn.waitForExist()
        signinBtn.click()
        LoginPage.isFormVisible()
        LoginPage.fillForm('invalid','invalid')
        LoginPage.submitForm()
        let errorTxt = $('div.alert-error')
        expect(errorTxt).toHaveText('Login and/or password are wrong.')
    })
    it('Should login with valid credentials', ()=>{
        App.openHomepage()
        let signinBtn = $('#signin_button')
        signinBtn.waitForExist()
        signinBtn.click()
        LoginPage.isFormVisible()
        LoginPage.fillForm('username','password')
        LoginPage.submitForm()
        let navBar = $('ul.nav-tabs')
        navBar.waitForExist()
        expect(navBar).toBeVisibleInViewport()
    })
    it('Should logout from application', ()=>{
        let iconUser = $('.icon-user')
        iconUser.waitForExist()
        iconUser.click()
        let logoutLink = $('#logout_link')
        logoutLink.waitForExist()
        logoutLink.click()
        let navBar = $('#pages-nav')
        expect(navBar).toBeVisibleInViewport()
    })
})