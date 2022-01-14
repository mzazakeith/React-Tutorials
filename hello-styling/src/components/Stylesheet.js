import React from 'react'
import './myStyles.css'

// addding props is part of method 2
function Stylesheet(props) {

    let className = props.primary ? 'primary' : ''

    return (
        <div>
            {/* method 1  */}
            {/* <h1 className='primary'>Stylesheets</h1> */}

            {/* method 2 */}
            <h1 className={`${className} font-xl`}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheet
