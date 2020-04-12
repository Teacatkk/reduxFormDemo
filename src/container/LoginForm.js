import Form from '../component/Form'
import { reduxForm } from 'redux-form'

const validate = values => {
    const error = {}
    if(!values.userAccount) {
        error.userAccount = 'Required'
    }
    if(!values.userPassword) {
        error.userPassword = 'Required'
    }
    return error
}


export default reduxForm({
    form: 'loginForm',
    validate: validate
})(Form)