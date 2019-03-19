export default class Sheet {
    constructor(data) {
        this.data = data
    }

    get persons() {
        return [...this.data.slice(0)]
    }

    get questions() {
        return this.data[0]
    }

    personByIndex = index => {
        return {
            index,
            answers: this.persons[index],
        }
    }

    questionByIndex = index => {
        return {
            value: this.questions[index],
            answers: persons.map(person => {
                person[index]
            }),
        }
    }

    questionByString = value => {
        const index = this.questions.findIndex(strg => strg === value)
        return this.questionByIndex(index)
    }
}
