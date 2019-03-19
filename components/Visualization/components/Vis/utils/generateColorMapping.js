import { interpolateMagma } from 'd3-scale-chromatic'

/**
 * Generates color mappings for the individual keys.
 * {
 *  KEY:COLOR
 * }
 *
 * @param {Array} keys
 */

export default function generateColorMapping(keys) {
    const colorSteps = 1 / keys.length

    return keys.reduce((acc, cur, ind) => {
        acc[cur] = interpolateMagma(ind * colorSteps + colorSteps / 2)
        return acc
    }, {})
}
