import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import breakpoints from '../../../lib/theme/breakpoints'

const widthMappings = {
    wide: breakpoints.md,
    narrow: 700,
}

const Wrapper = styled('section')`
    max-width: ${props => widthMappings[props.rowWidth]}px;
    ${space};
`

const Row = ({ rowWidth, children, strip, ...props }) => {
    return (
        <Wrapper px={[strip ? 0 : 4]} rowWidth={rowWidth} {...props}>
            {children}
        </Wrapper>
    )
}

Row.defaultProps = {
    rowWidth: 'narrow',
}

Row.propTypes = {
    rowWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['wide', 'narrow']),
    ]),
}

export default Row
