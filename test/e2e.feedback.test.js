// import App from '../pages_objects/App'
const app = require('../page_objects/App')
import FeedbackPage from '../page_objects/pages/FeedbackPage'

describe('E2E Feedback tests', ()=>{
    it('Should load feedback form', ()=>{
        app.openFeedbackPage()
        assert.equal(true, FeedbackPage.isFormVisible())
        
    })
    it('Should enter data in form and clear form', ()=>{
        FeedbackPage.fillForm('test','test@test.com','Simple test', 'This a simple WbedriverIO POM design')
        FeedbackPage.clearForm()
    })
    it('Should submit feedback form', ()=>{
        FeedbackPage.fillForm('test','test@test.com','Simple test', 'This a simple WbedriverIO POM design')
        FeedbackPage.submitForm()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })
})