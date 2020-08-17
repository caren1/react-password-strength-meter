import React from 'react'
import PrinciplesList from './PrinciplesList'
import { Card, ProgressBar } from 'react-bootstrap/';
import classNames from 'classnames';


class StrengthMeter extends React.Component {

    satisfiedPercent() {
        let { principles, password } = this.props;

        let satisfiedCount = principles.map(p => p.predicate(password))
        .reduce((count, satisfied) => count + (satisfied ? 1 : 0), 0);

        let principlesCount = principles.length
        return ( satisfiedCount / principlesCount ) * 100.0
    }

    progressColor() {
        let percentage = this.satisfiedPercent()

        return classNames({
            danger: (percentage < 33.4),
            success: (percentage >= 66.7),
            warning: (percentage >= 33.4 && percentage < 66.7)
        })
    }

    render(){
        return (
            <Card>
                <ProgressBar now={this.satisfiedPercent()}/>
                <h5>A good password is:</h5>
                <PrinciplesList  {...this.props} />
            </Card>
        )
    }
}

export default StrengthMeter