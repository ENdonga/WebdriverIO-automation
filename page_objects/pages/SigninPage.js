import Base from '../Base'
import Navbar from '../components/Navbar'

class SigninPage extends Base{
    get signinButton(){
        return '#signin_button'
    }

    get loginForm(){
        return $('#login_form')
    }
    get usernameInput(){
        return '#user_login'
    }
    get passwordInput(){
        return '#user_password'
    }
    get submitButton(){
        return $('input.btn-primary')
    }
    getError(){
        return $('div.alert-error')
    }

    // Page actions
    isFormVisible(){
        this.loginForm.waitForExist()
    }
    fillForm(username, password){
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
    }
    submitForm(){
        this.submitButton.click()
    }
    login(username, password){
        this.loginForm.waitForExist()
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
        this.submitButton.click()
    }
    signIn(username,password){
        this.loginForm.waitForExist()
        browser.waitAndTypeText(this.usernameInput,username)
        browser.waitAndTypeText(this.passwordInput,password)
    }
}
export default new SigninPage()