import Stack from '../Stack'
import Singleton from '../Singleton'

export default class Stacks {
    constructor({ values, title, colorMapping }) {
        this.type = 'stacks'
        this.title = title
        this.values = values
        this._colorMapping = colorMapping
    }

    get colorMapping() {
        return this._colorMapping
    }

    set colorMapping(mapping) {
        this._colorMapping = mapping
        this.stacks.forEach(stack => {
            stack.colorMapping = mapping
        })
    }

    get largest() {
        return this.values[0]
    }

    get stacks() {
        return this.values
    }

    getStack = index => {
        return this.values[index]
    }

    getStackData = index => {
        this.getStack(index).values
    }

    resize = value => {
        if (value < 1 || value > 10000) return this
        const ratio = value / this.largest.size

        this.values.map(stack => {
            return stack.multiply(ratio)
        })

        return this
    }
}

export const sampleStack = new Stacks({
    title: 'demographics',
    values: [
        new Stack({
            title: 'demographics',
            values: [
                new Singleton({
                    title: 'Female',
                    value: 40,
                }),
                new Singleton({
                    title: 'Male',
                    value: 13,
                }),
            ],
        }),
    ],
})
