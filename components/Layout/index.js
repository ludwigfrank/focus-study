import React from 'react'
import styled from 'styled-components'
import breakpoints from '../../lib/theme/breakpoints'
import Section from './Section'
import { Flex, Box } from '@rebass/grid'

const Wrapper = styled('div')`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-direction: column;
    min-height: 100vh;
`

export default function Layout({ children }) {
    return <Wrapper>{children}</Wrapper>
}

export { Section, Flex, Box }
