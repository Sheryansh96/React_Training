import { render } from '@testing-library/react'
import React from 'react'

function ChildComponent(props){
    return(
        <div>
            <button onClick={ () => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}


export default ChildComponent