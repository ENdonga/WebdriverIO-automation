class App {
    openHomepage() {
        browser.url('http://zero.webappsecurity.com/')
    }
    logout(){
        browser.url('http://zero.webappsecurity.com/logout.html')
    }
    openLoginPage(){
        browser.url('http://zero.webappsecurity.com/login.html')
    }
    openFeedbackPage(){
        browser.url('http://zero.webappsecurity.com/feedback.html')
    }
}
// export default new App()
module.exports = new App()