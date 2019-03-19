export default class Stack {
    constructor({ title, values, breadth = 24 }) {
        this.type = 'stack'
        this.title = title
        this.values = values
        this.breadth = breadth
    }

    get singletons() {
        return this.values
    }

    multiply = factor => {
        this.values = this.values.map(value => {
            return {
                ...value,
                value: value.value * factor,
            }
        })
    }

    get size() {
        return this.values.reduce((acc, cur) => {
            return acc + cur.value
        }, 0)
    }
}
