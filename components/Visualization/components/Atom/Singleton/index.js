import React from 'react'
import PropTypes from 'prop-types'

Singleton.propTypes = {
    innerRef: PropTypes.func,
}

export default function Singleton({ innerRef, ...restProps }) {
    return <rect ref={innerRef} rx={4} ry={4} {...restProps} />
}
