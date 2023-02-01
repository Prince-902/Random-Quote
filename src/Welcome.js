import React from 'react'

const Welcome = (props) => {
    return (
        <div>
            <h2>Welcome To College</h2>
            <h1>Hey! {props.name}</h1>
            <h2>Registration Number : {props.reg}</h2>
        </div>
    )
}

export default Welcome
