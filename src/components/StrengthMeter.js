import React from 'react'
import PrinciplesList from './PrinciplesList'
import { Card } from 'react-bootstrap/';
import PrinciplesProgress from './PrinciplesProgress';


class StrengthMeter extends React.Component {


    render(){
        return (
            <Card>
                <PrinciplesProgress {...this.props}/>
                <h5>A good password is:</h5>
                <PrinciplesList  {...this.props} />
            </Card>
        )
    }
}

export default StrengthMeter