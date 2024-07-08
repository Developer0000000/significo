import React from 'react'

const Button = ({ title, borderColor, btnLayout }) => {
    return (
        <>
            <button type='button' style={btnLayout} className={`button button--calypso border ${borderColor} uppercase px-6 py-3.5 w-fit`}>
                <span className="inline-block">{title}</span>
                <i className="ri-arrow-right-up-line text-xl pl-6"></i>
            </button>
        </>
    )
}

export default Button