import React, { Component } from 'react'
import CustomButton from './CustomButton'

const Header = ({ showAddTodoForm, showOnClick }) => {
    return (
        <h1>My Todos
            <CustomButton 
                btnTitle={ showAddTodoForm == true ? 'Close' : 'Add new' } 
                btnColor={ showAddTodoForm == true ? 'red' : 'green' }
                btnOnClick={ showOnClick }
            />
        </h1>
    )
}

export default Header