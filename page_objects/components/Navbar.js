import Base from '../Base'

class Navbar extends Base {
    get signinButton() {
        return $('#signin_button')
    }
    get loggedInUserNavbar() {
        return $('ul.nav-tabs')
    }
    get settingsIcon(){
        return $('.icon-cog')
    }
    get helpButton(){
        return $('#help_link')
    }
    get searchBox(){
        return $('#searchTerm')
    }
    // Page Actions
    clickSignIn() {
        this.signinButton.waitForExist()
        this.signinButton.click()
    }
    isLoggedInUserNavbarVisible() {
        return this.loggedInUserNavbar.waitForExist()
        // this.isLoggedInUserNavbarVisible.isDisplayed()
    }
    isSigninButtonVisible(){
        return this.signinButton.waitForExist()
    }
    clickSettings(){
        this.settingsIcon.waitForExist()
        this.settingsIcon.click()
    }
    clickHelpLink(){
        this.helpButton.waitForExist()
        this.helpButton.click()
    }
    search(text){
        this.searchBox.waitForExist()
        this.searchBox.setValue(text)
        browser.keys('Enter')
    }
    clickAndSignIn(){
        //TODO
    }
}
export default new Navbar()