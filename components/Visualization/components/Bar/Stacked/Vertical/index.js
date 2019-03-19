import React from 'react'
import PropTypes from 'prop-types'
import { Singleton, Group } from '../../../Atom'
import { dataType } from '../../../../types'
import { scaleLinear } from 'd3-scale'
import generateStackData from '../utils/generateStackData'

BarStackedVertical.propTypes = {
    ...dataType,
}

BarStackedVertical.defaultProps = {
    scale: value => value,
    breadth: 24,
}

export default function BarStackedVertical({
    data,
    colorMapping,
    breadth = 24,
    styleProperties,
}) {
    const { width, height, padding } = styleProperties
    const stackCollection = generateStackData(data.values, data.keys)

    const scale = scaleLinear(
        [0, stackCollection.maxCumulativeValue],
        [0, height]
    )

    breadth =
        width / stackCollection.length -
        padding +
        padding / stackCollection.length

    return (
        <Group>
            {stackCollection.map((stack, collectionIndex) => {
                return (
                    <Group top={height - scale(stack.cumulativeValue)}>
                        {stack.map((value, stackIndex) => {
                            return (
                                <Singleton
                                    key={`singleton-${
                                        value.key
                                    }-${collectionIndex}-${stackIndex}`}
                                    y={scale(value[0])}
                                    x={collectionIndex * (padding + breadth)}
                                    height={scale(value[1]) - scale(value[0])}
                                    width={breadth}
                                    fill={colorMapping[value.key]}
                                />
                            )
                        })}
                    </Group>
                )
            })}
        </Group>
    )
}
