import React from 'react'
import PropTypes from 'prop-types'
import { Group } from '../../../../'
import { Singleton } from '../../../Atom'
import { dataType } from '../../../../types'
import generateStackData from '../utils/generateStackData'

BarStackedHorizontal.propTypes = {
    ...dataType,
}

BarStackedHorizontal.defaultProps = {
    scale: value => value,
    breadth: 24,
    padding: 12,
}

export default function BarStackedHorizontal({
    data,
    scale,
    colorMapping,
    breadth = 24,
    padding = 12,
    styleProperties,
}) {
    const { width, height } = styleProperties
    const stackCollection = generateStackData(data.values, data.keys)
    breadth =
        height / stackCollection.length -
        padding +
        padding / stackCollection.length

    return (
        <Group>
            {stackCollection.map((stack, collectionIndex) => {
                return stack.map((value, stackIndex) => {
                    return (
                        <Singleton
                            key={`singleton-${
                                value.key
                            }-${collectionIndex}-${stackIndex}`}
                            x={scale(value[0])}
                            y={collectionIndex * (padding + breadth)}
                            width={scale(value[1]) - scale(value[0])}
                            height={breadth}
                            fill={colorMapping[value.key]}
                        />
                    )
                })
            })}
        </Group>
    )
}
