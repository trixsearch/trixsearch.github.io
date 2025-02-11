/*
@copyright 2024 trixsearch
@license Apache-2.0
*/

import PropTypes from 'prop-types';

import React from 'react';


/* Primary Button */
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes,

}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`btn btn-primary ${classes || ''}`}>
                {label}
                {icon ?
                    <span className="material-symbols-rounded"
                        aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    }
    else {
        return (
            <button className={`btn btn-primary ${classes || ''}`}>
                {/* we can also write as the following statement */}
            {/* <button className={"btn btn-primary" + classes}> */}

                {label}
                {icon ?
                    <span className="material-symbols-rounded"
                        aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </button>
        )
    }
}



ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

/* Outline ki Button */
const ButtonOutLine = ({
    href,
    target = '_self',
    label,
    icon,
    classes,

}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`btn btn-outline ${classes || ''}`}>
                {label}
                {icon ?
                    <span className="material-symbols-rounded"
                        aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    }
    else {
        return (
            <button className={`btn btn-outline ${classes || ''}`}>
                {/* we can also write as the following statement */}
            {/* <button className={"btn btn-primary" + classes}> */}

                {label}
                {icon ?
                    <span className="material-symbols-rounded"
                        aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </button>
        )
    }
}



ButtonOutLine.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary,ButtonOutLine
}