import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PasswordField from '../components/PasswordField'
import StrengthMeter from '../components/StrengthMeter'
import classNames from 'classnames'


const PasswordInput = () => {

    const SPECIAL_CHARS_REGEX = /[^A-Za-z0-9]/
    const DIGIT_REGEX = /[0-9]/

    let goodPasswordPrinciples = [
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

    const [ password, setPassword ] = useState('')
    const [ principles, setPrinciples ] = useState(goodPasswordPrinciples)

    const onPasswordChange = (pass) => {
        setPassword(pass)
    }

    const onPrinciplesChange = (newPrinciples) => {
        setPrinciples(newPrinciples)
    }

    const satisfiedPercent = () => {
        let satisfiedCount = principles.map(p => p.predicate(password))
        .reduce((count, satisfied) => count + (satisfied ? 1 : 0), 0);

        let principlesCount = principles.length
        return ( satisfiedCount / principlesCount ) * 100.0
    }

    const inputColor = () => {
        let percentage = satisfiedPercent
        return classNames({
            error: (percentage < 33.4),
            success: (percentage >= 66.7),
            warning: (percentage >= 33.4 && percentage < 66.7)
        })
    }

    return (
        <Container>
            <Row>
                <Col md={8}>
                    <PasswordField password={password} onPasswordChange={onPasswordChange} inputColor={inputColor()}/>
                </Col>
                <Col md={4}>
                    <StrengthMeter password={password} principles={principles} satisfiedPercent={satisfiedPercent()} />
                </Col>
            </Row>
        </Container>
    )
}


export default PasswordInput
