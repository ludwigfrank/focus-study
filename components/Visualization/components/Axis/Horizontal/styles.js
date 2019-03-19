import styled from 'styled-components'

export const Wrapper = styled('div')`
    width: ${props => `calc(100% + ${props.padding * 2}px)`};
    display: flex;
    transform: ${props => `translateX(-${props.padding}px)`};
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    margin-top: 16px;
    border-top: 1px solid ${props => props.theme.accent.blueGrey[100]};
`

export const Item = styled('div')`
    width: ${props => `calc(100% / ${props.itemCount})`};
    > * {
        text-align: center;
    }
`
