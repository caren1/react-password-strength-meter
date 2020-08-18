import React from 'react'
import { ProgressBar } from 'react-bootstrap/';
import classNames from 'classnames'

const PrinciplesProgress = ({ satisfiedPercent }) => {

    const progressColor = () => {
        let percentage = satisfiedPercent

        return classNames({
            danger: (percentage < 33.4),
            success: (percentage >= 66.7),
            warning: (percentage >= 33.4 && percentage < 66.7)
        })
    }

    return (<ProgressBar animated now={satisfiedPercent} variant={progressColor()}/>)
}

export default PrinciplesProgress