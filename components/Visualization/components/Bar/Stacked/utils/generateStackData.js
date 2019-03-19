import { stack as d3Stack } from 'd3-shape'

/**
 * Transforms the original d3 data in a more suited stack
 *
 * @param {Array} originalData
 * @param {Array} keys
 */
const generateStackData = (originalData, keys) => {
    let maxCumulativeValue = 0
    const stackedData = d3Stack().keys(keys)(originalData)
    const stackCollection = []
    for (let index = 0; index < originalData.length; index++) {
        const stack = stackedData.map((value, ind) => {
            value[index].key = keys[ind]
            return value[index]
        })

        stack.cumulativeValue = stack[stack.length - 1][1]
        if (stack.cumulativeValue > maxCumulativeValue)
            maxCumulativeValue = stack.cumulativeValue

        stackCollection.push(stack)
    }

    stackCollection.maxCumulativeValue = maxCumulativeValue

    return stackCollection
}

export default generateStackData
