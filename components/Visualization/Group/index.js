import React from 'react'
import PropTypes from 'prop-types'

Group.propTypes = {
    top: PropTypes.number,
    left: PropTypes.number,
    transform: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any,
}

export default function Group({
    top = 0,
    left = 0,
    transform,
    children,
    ...restProps
}) {
    return (
        <g transform={transform || `translate(${left}, ${top})`} {...restProps}>
            {children}
        </g>
    )
}
