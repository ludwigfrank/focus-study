import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Dot, LegendItemWrapper } from './styles'
import { Typography } from '$components'

Legend.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            colorKey: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const LegendItem = ({ colorKey, color }) => {
    return (
        <LegendItemWrapper>
            <Dot color={color} />
            <Typography titleCase type={'body2'} m={0}>
                {colorKey}
            </Typography>
        </LegendItemWrapper>
    )
}

export default function Legend({ colorMapping }) {
    return (
        <Wrapper>
            {Object.keys(colorMapping).map(colorKey => (
                <LegendItem
                    colorKey={colorKey}
                    color={colorMapping[colorKey]}
                />
            ))}
        </Wrapper>
    )
}
