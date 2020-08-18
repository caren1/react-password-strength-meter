import React from 'react'
import PrinciplesList from './PrinciplesList'
import PrinciplesProgress from './PrinciplesProgress';
import { Card } from 'react-bootstrap/';

const StrengthMeter = ({ password, principles, satisfiedPercent }) => {
    
    // console.log(principles);
    return (
        <Card>
            {/* <PrinciplesProgress {...props} /> */}
            <PrinciplesProgress satisfiedPercent={satisfiedPercent}/>
            <h5>A good password is:</h5>
            {/* <PrinciplesList  {...props} /> */}
            <PrinciplesList  password={password} principles={principles}/>
        </Card>
    )
}


export default StrengthMeter