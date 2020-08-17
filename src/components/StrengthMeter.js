import React from 'react'
import PrinciplesList from './PrinciplesList'
import { Card } from 'react-bootstrap/';


class StrengthMeter extends React.Component {

    render(){
        return (
            <Card>
                <h5>A good password is:</h5>
                <PrinciplesList  {...this.props} />
            </Card>
        )
    }
}

export default StrengthMeter