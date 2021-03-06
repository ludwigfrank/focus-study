import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'
import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export default class Responsive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            height: 0,
            top: 0,
            left: 0,
        }
        this.resize = debounce(this.resize.bind(this), 100)
        this.setTarget = this.setTarget.bind(this)
        this.animationFrameID = null
    }

    componentDidMount() {
        this.ro = new ResizeObserver((entries = [], observer) => {
            entries.forEach(entry => {
                const { left, top, width, height } = entry.contentRect
                this.animationFrameID = window.requestAnimationFrame(() => {
                    this.resize({ width, height, top, left })
                })
            })
        })
        this.ro.observe(this.target)
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this.animationFrameID)
        this.ro.disconnect()
    }

    resize({ width, height, top, left }) {
        this.setState(() => ({ width, height, top, left }))
    }

    setTarget(ref) {
        this.target = ref
    }

    render() {
        const { children, ...restProps } = this.props
        return (
            <div
                style={{
                    width: '100%',
                    height: this.props.fixedHeight
                        ? this.props.fixedHeight + 'px'
                        : '100%',
                }}
                ref={this.setTarget}
                {...restProps}
            >
                {children({
                    ...this.state,
                    ref: this.target,
                    resize: this.resize,
                })}
            </div>
        )
    }
}

Responsive.propTypes = {
    className: PropTypes.string,
    children: PropTypes.func.isRequired,
    direction: PropTypes.oneOf(['vertical', 'horizontal']),
    data: PropTypes.shape({
        type: PropTypes.oneOf(['stacks', 'bars']).isRequired,
        values: PropTypes.array.isRequired,
    }),
}

Responsive.defaultProps = {
    direction: 'horizontal',
}
