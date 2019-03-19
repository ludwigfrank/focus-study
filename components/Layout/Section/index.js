import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const Section = styled('section')`
    max-width: ${props => props.theme.breakpoints.lg}px;
    padding: 24px 24px;
    width: 100%;
    margin: 0 auto;
    ${space};
`

export default Section
