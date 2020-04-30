import App from '../page_objects/App'
import NavBar from '../page_objects/components/Navbar'

describe('E2E Test - Search', ()=> {
    it('Should load homepage', ()=>{
        App.openHomepage()
    })
    it('Should submit searchbox', ()=>{
        NavBar.search('Bank')
        let resultsTitle = $('h2')
        resultsTitle.waitForExist()
        expect(resultsTitle).toHaveText('Search Results:')
    })
})