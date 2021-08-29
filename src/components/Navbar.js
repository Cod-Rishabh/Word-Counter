import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <nav className={`d-flex navbar navbar-expand-lg navbar-light bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className={`navbar-brand text-${props.mode === 'dark'?'light':'dark'}`} href="/">{props.title}</a>
                </div>
            </nav>
        </>

    );
}

Navbar.PpropTypes = {
    title: PropTypes.string
}

Navbar.defaultProps = {
    title: "Word Counter"
}
