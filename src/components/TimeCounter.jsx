import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeIsOver } from '../store/reducers/qnaReducer'
const TimeCounter = ({ seconds }) => {
    const [countDown, setCountDown] = useState(seconds)
    const timerId = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountDown((prev) => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [])

    useEffect(() => {
        if (countDown <= 0) {
            clearInterval(timerId.current)
            dispatch(changeIsOver())
        }
    }, [countDown])

    return <div>TimeCounter : {countDown}</div>
}

export default TimeCounter
