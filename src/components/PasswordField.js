import React from 'react'
import { Input } from 'react-bootstrap'


class PasswordField extends React.Component {

    constructor(props) {
        super(props)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handlePasswordChange(event) {
        let { onPasswordChange } = this.props
        onPasswordChange(event.target.value)
    }

    render() { 
        let { password } = this.props

        return  (
            <Input
            type='password'
            label='Password'
            value={password}
            onChange={this.handlePasswordChange}
            hasFeedback />
        )
    }
}

export default PasswordField