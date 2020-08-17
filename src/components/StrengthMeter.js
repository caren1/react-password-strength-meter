import React from 'react'
import { Card } from 'react-bootstrap/';

class StrengthMeter extends React.Component {
    render() {
        
        let { principles } = this.props;
        
        return (
            <Card>
                <ul>
                    {principles.map(principle => 
                        <li>
                            <small>
                                {principle.label}
                            </small>
                        </li>
                    )}
                </ul>
            </Card>
        )
    }
}

export default StrengthMeter