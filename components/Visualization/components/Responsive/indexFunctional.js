import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'
import React, { useState, useRef, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { format } from 'url'

export default function Responsive({ children, ...restProps }) {
    const [measurements, setMeasurements] = useState({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    })

    const target = useRef(null)
    let resizeObserver = null
    let animationFrameID = null

    useEffect(() => {
        resizeObserver = new ResizeObserver((entries = [], observer) => {
            entries.forEach(entry => {
                const { left, top, width, height } = entry.contentRect
                animationFrameID = window.requestAnimationFrame(() => {
                    resize({ width, height, top, left })
                })
            })
        })

        resizeObserver.observe(target.current)
        return () => {
            window.cancelAnimationFrame(animationFrameID)
            resizeObserver.disconnect()
        }
    }, [target])

    const resize = ({ width, height, top, left }) => {
        setMeasurements({ ...measurements, width: width, height, top, left })
    }

    return (
        <div
            style={{ width: '100%', height: '100%' }}
            ref={target}
            {...restProps}
        >
            {children({
                ...measurements,
            })}
        </div>
    )
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
