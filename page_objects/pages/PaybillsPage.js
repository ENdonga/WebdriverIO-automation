import Base from '../Base'

class PaybillsPage extends Base {
    // Locators for pay saved payee tab
    get payeeDropdown() {
        return $('#sp_payee')
    }
    get accountDropdown() {
        return $('#sp_account')
    }
    get payeeTabAmountInput() {
        return $('#sp_amount')
    }
    get dateInput() {
        return $('#sp_date')
    }
    get descriptionInput() {
        return $('#sp_description')
    }
    get payButton() {
        return $('#pay_saved_payees')
    }
    get helpContextButton() {
        return $('.icon-question-sign')
    }

    // Locators for Purchase foreign currency tab
    get currencyDropdown() {
        return $('#pc_currency')
    }
    get amountInput() {
        return $('#pc_amount')
    }
    get dollarRadioButton() {
        return $('#pc_inDollars_true')
    }
    get selectedCurrencyRadioButton() {
        return $('#pc_inDollars_false')
    }
    get calculateCostButton() {
        return $('#pc_calculate_costs')
    }
    get purchaseButton() {
        return $('#purchase_cash')
    }
    get resultContainer() {
        return $('#alert_container')
    }
    // Actions for pay saved payee tab
    selectPayeeDropdown(attribute, text) {
        this.payeeDropdown.waitForExist()
        this.payeeDropdown.selectByAttribute(attribute, text)
    }
    selectAccountDropdown(text) {
        this.accountDropdown.selectByVisibleText(text)
    }

    fillPayeeTabAmount(amount) {
        this.payeeTabAmountInput.setValue(amount)
    }
    fillDate(date) {
        this.dateInput.setValue(date)
    }
    fillDescription(text) {
        this.descriptionInput.setValue(text)
    }
    clickPayButton() {
        this.payButton.click()
    }
    clickHelpContextButton() {
        this.helpContextButton.click()
    }
    // Actions for Purchase foreign currency tab
    clickCalculateCostsButton() {
        this.calculateCostButton.waitForExist()
        this.calculateCostButton.click()
    }
    selectCurrencyDropdown(attribute,text) {
        this.currencyDropdown.waitForExist()
        this.currencyDropdown.selectByAttribute(attribute, text)
    }
    fillAmount(amount) {
        this.amountInput.setValue(amount)
    }
    clickDollarRadioButton() {
        this.dollarRadioButton.click()
    }
    clickSelectedCurrencyRadioButton() {
        this.selectedCurrencyRadioButton.click()
    }
    clickPurchaseButton() {
        this.purchaseButton.click()
    }
    isResultMessageVisible() {
        return this.resultContainer.waitForExist()
    }
}
export default new PaybillsPage()