import Base from '../Base'

class FeedbackPage extends Base{
    get form(){
        return $('form')
    }
    get nameInput(){
        return $('#name')
    }
    get emailInput(){
        return $('#email')
    }
    get subjectInput(){
        return $('#subject')
    }
    get commentTextArea(){
        return $('#comment')
    }
    get clearButton(){
        return $(`input[type="reset"]`)
    }
    get submitButton(){
        return $('.btn-signin')
    }
    isFormVisible(){
        return this.form.waitForExist()
    }
    fillForm(name, email, subject, message){
        this.nameInput.setValue(name)
        this.emailInput.setValue(email)
        this.subjectInput.setValue(subject)
        this.commentTextArea.setValue(message)
    }
    submitForm(){
        this.submitButton.click()
    }
    clearForm(){
        this.clearButton.click()
    }
}
export default  new FeedbackPage()