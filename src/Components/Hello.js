import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Shreyansh</h1>
    //     </div>
    // )
    return React.createElement('div', {id: 'hello'}, React.createElement('h1', null, "Hello Shreyansh"))
}

export default Hello