class App {
    openHomepage() {
        browser.url('http://zero.webappsecurity.com/')
        browser.maximizeWindow()
    }
    logout(){
        browser.url('http://zero.webappsecurity.com/logout.html')
    }
    openLoginPage(){
        browser.url('http://zero.webappsecurity.com/login.html')
        browser.maximizeWindow()
    }
    openFeedbackPage(){
        browser.url('http://zero.webappsecurity.com/feedback.html')
        browser.maximizeWindow()
    }
}
// export default new App()
module.exports = new App()