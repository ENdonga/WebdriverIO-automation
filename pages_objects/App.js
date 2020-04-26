class App{
    openHomepage(){
        browser.url('http://zero.webappsecurity.com/')
        browser.maximizeWindow()
    }
}
// export default new App()
module.exports = new App()