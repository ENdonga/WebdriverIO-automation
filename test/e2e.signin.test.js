import App from '../page_objects/App'
import SigninPage from '../page_objects/pages/SigninPage'
import Navbar from '../page_objects/components/Navbar'

describe('E2E Test - Using driver helper methods', () => {
    it('Should click on the sign in button', ()=>{
        App.openHomepage()
        browser.waitAndClick(SigninPage.signinButton)
    })
    it('Should wait for selector and type text', ()=>{
        SigninPage.signIn('user', 'passnot')
    })
})
