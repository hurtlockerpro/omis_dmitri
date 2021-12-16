import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

const Button = ({btnTitle, btnColor}) => {
    return (
        <button style={{ backgroundColor: btnColor }}>{ btnTitle }</button>
    )
}

Button.defaultProps = {
    btnTitle: "Add new",
    btnColor: "green", 
    //btnOnClick: onBtnClick
}

Button.propTypes = {
    btnTitle: PropTypes.string
}

export default Button
