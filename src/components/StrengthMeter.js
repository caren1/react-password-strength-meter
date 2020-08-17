import React from 'react'
import { Card } from 'react-bootstrap/';

class StrengthMeter extends React.Component {

    principleSatisfied(principle) {
        let { password } = this.props
        return principle.predicate(password)
    }


    render() {
        let { principles } = this.props;
        
        return (
            <Card>
                <h5>A good password is:</h5>
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