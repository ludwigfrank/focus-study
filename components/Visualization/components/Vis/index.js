import React from 'react'
import PropTypes from 'prop-types'
import {
    BarStackedHorizontal,
    BarStackedVertical,
    BarBasicVertical,
    Responsive,
    Legend,
} from '../'
import { generateColorMapping } from './utils'
import { scaleLinear } from 'd3-scale'
import AxisHorizontal from '../Axis/Horizontal'
import { Wrapper } from './styles'

Visualization.propTypes = {
    data: PropTypes.shape({
        type: PropTypes.oneOf(['bar-stacked-horizontal']).isRequired,
        values: PropTypes.array.isRequired,
        keys: PropTypes.array.isRequired,
    }).isRequired,
}

const getComponent = type => {
    let Component

    switch (type) {
        case 'bar-stacked-horizontal':
            Component = BarStackedHorizontal
            break
        case 'bar-stacked-vertical':
            Component = BarStackedVertical
        default:
            Component = BarStackedVertical
    }

    return Component
}

export default function Visualization({ data }) {
    const padding = 12
    const colorMapping = generateColorMapping(data.keys)
    let Component = getComponent(data.type)

    let fixedHeight = false

    if (data.type === 'bar-stacked-horizontal') {
        fixedHeight = data.values.length * 24
    } else {
        fixedHeight = 200
    }

    return (
        <Wrapper>
            {[
                data.keys.length > 1 && <Legend colorMapping={colorMapping} />,
                <Responsive fixedHeight={fixedHeight}>
                    {({ width, height }) => {
                        console.log(height)
                        const maxSpan = data.type.includes('vertical')
                            ? height
                            : width
                        return (
                            <svg
                                width={'100%'}
                                height={'100%'}
                                key="visualization"
                            >
                                <Component
                                    colorMapping={colorMapping}
                                    scale={scaleLinear(
                                        [0, data.max],
                                        [0, maxSpan]
                                    )}
                                    data={data}
                                    styleProperties={{
                                        width,
                                        height,
                                        padding,
                                    }}
                                />
                            </svg>
                        )
                    }}
                </Responsive>,
                data.axisHorizontal && (
                    <AxisHorizontal
                        values={data.axisHorizontal}
                        padding={padding}
                    />
                ),
            ]}
        </Wrapper>
    )
}
