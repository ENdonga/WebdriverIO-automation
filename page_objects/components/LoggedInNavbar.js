import Base from '../Base'

class LoggedInNavbar extends Base {
    get accountActivityMenu() {
        return $('=Account Activity')
    }
    get findTransactionsMenu() {
        return $('=Find Transactions')
    }
    get payBillsMenu(){
        return $('=Pay Bills')
    }
    get purchaseForeignCurrencyMenu(){
        return $('=Purchase Foreign Currency')
    }
    get paySavedPayeeMenu(){
        return $('=Pay Saved Payee')
    }
    clickAccountActivityTab() {
        this.accountActivityMenu.waitForExist()
        this.accountActivityMenu.click()
    }
    clickFindTransactionsTab() {
        this.findTransactionsMenu.waitForExist()
        this.findTransactionsMenu.click()
    }
    clickPaybillsTab(){
        this.payBillsMenu.waitForExist()
        this.payBillsMenu.click()
    }
    clickPaySavedPayeeTab(){
        this.paySavedPayeeMenu.waitForExist()
        this.paySavedPayeeMenu.click()
    }
    clickPurchaseForeignCurrencyTab(){
        this.purchaseForeignCurrencyMenu.waitForExist()
        this.purchaseForeignCurrencyMenu.click()
    }
}
export default new LoggedInNavbar()