import styled from 'styled-components'

export const Wrapper = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`

export const Dot = styled('span').attrs(({ color = 'blue' }) => {
    return {
        style: {
            backgroundColor: color,
        },
    }
})`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    margin-right: 12px;
    display: inline-block;
    margin-bottom: 6px;
`

export const LegendItemWrapper = styled('div')`
    display: flex;
    flex-direction: row;
    margin: 0 12px;
    align-items: center;
`
