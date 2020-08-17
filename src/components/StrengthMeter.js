import React from 'react'
import { Grid, Row, Col, Panel } from 'react-bootstrap'

class StrengthMeter extends React.Component {
    render() {
        
        let { principles } = this.props;
        
        return (
            <Panel>
                <ul>
                    {principles.map(principle => 
                        <li>
                            <small>
                                {principle.label}
                            </small>
                        </li>
                    )}
                </ul>
            </Panel>
        )
    }
}