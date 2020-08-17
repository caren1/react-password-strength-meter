import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PasswordField from '../components/PasswordField'
import StrengthMeter from '../components/StrengthMeter'

class PasswordInput extends React.Component {

    constructor(props){
        super(props)
        this.state = { password: 'asd1ZXCASD'}
    }

    render() {

        let { goodPasswordPrinciples } = this.props;
        let { password } = this.state;

        return (
            <Container>
                <Row>
                    <Col md={8}>
                        <PasswordField />
                    </Col>
                    <Col md={4}>
                        <StrengthMeter principles={goodPasswordPrinciples} password={password}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const SPECIAL_CHARS_REGEX = /[^A-Za-z0-9]/
const DIGIT_REGEX = /[0-9]/

PasswordInput.defaultProps = {
    goodPasswordPrinciples : [
        {
            label: '6+ characters',
            predicate: password => password.length >= 6
        },
        {
            label: 'with at least one digit',
            predicate: password => password.match(DIGIT_REGEX) !== null
        },
        {
            label: 'with at least one special character',
            predicate: password => password.match(SPECIAL_CHARS_REGEX) !== null
        }
    ]
}

export default PasswordInput
