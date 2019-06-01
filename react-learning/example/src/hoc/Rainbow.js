import React from 'react';

const Rainbow = (WrapperedComponent) => {
    let colours = ['pink', 'blue', 'yellow', 'green', 'purple']
    let color = colours[Math.floor(Math.random() * colours.length)]
    let className = color + '-text'

    return (props) => {
        return (
            <div className={className}>
                <WrapperedComponent {...props}/>
            </div>  
        )
    }
}

export default Rainbow;