import React from 'react'
import { Field } from 'redux-form'
import { Form, Button, Row, Col } from 'react-bootstrap'

const getFiledComponent = (props) => {
    console.log(props)
    const {input, label, type, placeholder, meta: {active, touched, error, warning}} = props
    let showError = touched && error && !active
    return (
        <Form.Group controlId="formAccount">
            <Form.Label className="label">
            {
               showError ? <span style={{color: 'red'}}>{error}</span> : <span>{label}</span>
            }
            </Form.Label>
            <Form.Control className={ showError ? 'red-border' : '' } type={type} placeholder={placeholder} {...input}/>
        </Form.Group>
    )
}

class LoginForm extends React.Component {
    render() {
        const {handleSubmit} = this.props
        console.log(this.props)
        return (
            <Form onSubmit={handleSubmit(data => console.log(data))}>
                <Field
                    name="userAccount"
                    component={getFiledComponent}
                    props={{type: 'text', label: '账号', placeholder: '请输入账号'}}
                    >
                </Field>
                <Field
                    name="userPassword"
                    component={getFiledComponent}
                    props={{type: 'password', label: '密码', placeholder: '请输入密码'}}
                    >
                </Field>
                <Button block variant="primary" type="submit">登录</Button>
            </Form>
        )
    }
}

export default LoginForm