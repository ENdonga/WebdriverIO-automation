import App from '../page_objects/App'
import LoginPage from '../page_objects/pages/LoginPage'
import FilterPage from '../page_objects/pages/FiltersPage'
import NavBar from '../page_objects/components/Navbar'
import LoggedInNavbar from '../page_objects/components/LoggedInNavbar'

describe('E2E Test - Filter transactions', ()=>{
    it('Should login into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        assert.equal(true, NavBar.isLoggedInUserNavbarVisible())
    })
    it('Should filter and find a transactions', ()=>{
        LoggedInNavbar.clickAccountActivityTab()
        LoggedInNavbar.clickFindTransactionsTab()
        FilterPage.fillDescription('ONLINE')
        FilterPage.fillFromDate('2012-05-06')
        FilterPage.fillToDate('2020-03-26')
        FilterPage.fillFromAmount('10')
        FilterPage.fillToAmount('999')
        FilterPage.selectDropdownOption()
        FilterPage.submitFilter()
        assert.equal(true, FilterPage.isFilterResultsTableDisplayed())
    })
    it.skip('Should filter and find no transactions', ()=>{
        browser.refresh()
        LoggedInNavbar.clickAccountActivityTab()
        LoggedInNavbar.clickFindTransactionsTab()
        FilterPage.fillDescription('test')
        FilterPage.submitFilter()
        FilterPage.isResultsTableVisible()
        let message = FilterPage.resultMessage
        expect(message).toHaveText('No results.')
    })
})