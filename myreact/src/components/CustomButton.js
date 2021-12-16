import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

const CustomButton = ({ btnTitle, btnColor, btnOnClick }) => {
    return (
        <button 
            style={{ backgroundColor: btnColor }}
            onClick={ btnOnClick }
            className='btn'
        >{ btnTitle }</button>
    )
}

CustomButton.defaultProps = {
    btnTitle: "Add new",
    btnColor: "green"
}

CustomButton.propTypes = {
    btnTitle: PropTypes.string
}

export default CustomButton
