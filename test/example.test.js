describe('First WebdriverIO tests scripts', () =>{
    it('Load Example website', () => {
        browser.url('https://webdriver.io/')
        browser.maximizeWindow()
    })
})