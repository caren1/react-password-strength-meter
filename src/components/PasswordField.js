import React from 'react'
import { Form } from 'react-bootstrap'

const PasswordField = ({ password, onPasswordChange, inputColor }) => { 

    const handlePasswordChange = (event) => {
        onPasswordChange(event.target.value)
    }

    return (
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password}
            variant={inputColor}
            onChange={handlePasswordChange}/>
        </Form.Group>
    )
}

export default PasswordField