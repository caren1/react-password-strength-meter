import React from 'react'
import classNames from 'classnames';

const PrinciplesList = ({ password, principles }) => {

    const principleSatisfied = (principle) => {
        return principle.predicate(password)
    }

    const principleClass = (principle) => {
        let satisfied = principleSatisfied(principle)

        return classNames({
            ["text-success"] : satisfied,
            ["text-danger"] : !satisfied
        })
    }

    return (
        <ul>
             {principles.map(principle => 
                <li className={principleClass(principle)} key={principle.label}>
                    <small>
                     {principle.label}
                    </small>
                </li>
            )}
        </ul>
    )
}

export default PrinciplesList