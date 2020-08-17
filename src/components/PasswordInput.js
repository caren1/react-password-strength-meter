import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class PasswordInput extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={8}>
                        <PasswordField />
                    </Col>
                    <Col md={4}>
                        <StrengthMeter />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
