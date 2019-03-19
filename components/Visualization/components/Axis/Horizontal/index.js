import React from 'react'
import { Wrapper, Item } from './styles'
import { Typography } from '$components'

export default function AxisHorizontal({ values, padding }) {
    return (
        <Wrapper padding={padding}>
            {values.map(value => {
                return (
                    <Item itemCount={values.length}>
                        <Typography type={'body2'}>{value}</Typography>
                    </Item>
                )
            })}
        </Wrapper>
    )
}
