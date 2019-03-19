export default function parser(data) {
    // Data in the format of Array[Array[value1, value2, ...n]]
    const headers = data[0]
    const rows = data.splice(1, data.length)

    const parsers = [
        {
            condition: (v, c) => v.includes('Male'),
            transformation: v => 'Male',
        },
        {
            condition: (v, c) => v.includes('Female'),
            transformation: v => 'Female',
        },
        {
            condition: (v, c) => v.includes('Never') && !v.includes('tried'),
            transformation: v => '0',
        },
        {
            condition: (v, c) => v.includes('1 + per week'),
            transformation: v => '3',
        },
        {
            condition: (v, c) => v.includes('5 + per week'),
            transformation: v => '6',
        },
        {
            condition: (v, c) => v.includes('Each day'),
            transformation: v => '12',
        },
        {
            condition: (v, c) => v.includes('No'),
            transformation: v => 'No',
        },
        {
            condition: (v, c) => v.includes('Sometimes'),
            transformation: v => 'Sometimes',
        },
        {
            condition: (v, c) => v.includes('Yes'),
            transformation: v => 'Yes',
        },
        {
            condition: (v, c) => true,
            transformation: v => v,
        },
    ]

    return [
        headers,
        ...rows.map((row, index) => {
            return row.map(value => {
                for (let parser of parsers) {
                    let found = false

                    if (parser.condition(value)) {
                        found = true
                        return parser.transformation(value)
                    }

                    if (found) {
                        break
                    }
                }
            })
        }),
    ]
}
