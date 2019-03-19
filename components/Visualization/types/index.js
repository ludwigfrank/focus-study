import PropTypes from 'prop-types'

const visualizations = ['bar-stacked-horizontal', 'bar-basic-vertical']

export const dataType = PropTypes.shape({
    // E.g. type: 'bar-stacked-horizontal',
    type: PropTypes.oneOf(visualizations).isRequired,
    // E.g. values: [{ question: 'one', female: 15, male: 10, other: 5 }],
    values: PropTypes.arrayOf(PropTypes.object).isRequired,
    // E.g. keys: ['female', 'male', 'other'],
    keys: PropTypes.arrayOf(PropTypes.string),
    colorMapping: PropTypes.object.isRequired,
    scale: PropTypes.func,
    breadth: PropTypes.number,
    padding: PropTypes.number,
    styleProperties: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number,
    }),
})
