//import React from 'react' va dichiarato una sola volta
import './Text.css'

import React from 'react'

function Text(props) {
    
    const {variant = 'large', children, ...rest} = props
    return (
        <text className={`text ${variant}`} {...rest}>
            {children}
        </text>
    )
}

export default Text;