describe('E2E Test - Search', ()=> {
    it('Should load homepage', ()=>{
        browser.url('http://zero.webappsecurity.com/')
        browser.maximizeWindow()
        let searchbox = $('#searchTerm')
        searchbox.waitForExist()
        expect(searchbox).toBeVisibleInViewport()
    })
    it('Should submit searchbox', ()=>{
        let searchbox = $('#searchTerm')
        searchbox.setValue('Bank')
        browser.keys('Enter')
        let resultsTitle = $('h2')
        resultsTitle.waitForExist()
        expect(resultsTitle).toHaveText('Search Results:')
    })
})