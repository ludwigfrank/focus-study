import { Text } from '@vx/text'
import styled from 'styled-components'

export default styled(Text)`
    font-family: 'Theinhardt';
    fill: ${props => props.theme.accent.blueGrey[700]};
`
