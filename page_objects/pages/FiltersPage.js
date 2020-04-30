import Base from '../Base'

class FiltersPage extends Base{
    get descriptionInput() {
        return $('#aa_description')
    }
    get fromDateInput() {
        return $('#aa_fromDate')
    }
    get toDateInput() {
        return $('#aa_toDate')
    }
    get fromAmountInput() {
        return $('#aa_fromAmount')
    }
    get toAmountInput() {
        return $('#aa_toAmount')
    }
    get typeDropdown() {
        return $('#aa_type')
    }
    get findButton() {
        return $(`button[type="submit"]`)
    }
    get resultsTable(){
        return $('#filtered_transactions_for_account')
    }
    get resultMessage(){
        return $('div.well')
    }
    get filterResultsTable(){
        return $(`#filtered_transactions_for_account > table:nth-child(1)`)
    }
    fillDescription(text){
        this.descriptionInput.waitForExist()
        this.descriptionInput.setValue(text)
    }
    fillFromDate(fromDate){
        this.fromDateInput.waitForExist()
        this.fromDateInput.setValue(fromDate)
    }
    fillToDate(toDate){
        this.toDateInput.setValue(toDate)
    }
    fillFromAmount(amount){
        this.fromAmountInput.setValue(amount)
    }
    fillToAmount(amount){
        this.toAmountInput.setValue(amount)
    }
    selectDropdownOption(){
        this.typeDropdown.selectByAttribute('value','DEPOSIT')
    }
    submitFilter(){
        this.findButton.click()
    }
    isResultsTableVisible(){
        return this.resultsTable.waitForExist()
    }
    isFilterResultsTableDisplayed(){
        return this.filterResultsTable.waitForExist()
    }
}
export default new FiltersPage()