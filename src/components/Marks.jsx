import { useSelector } from 'react-redux'

const Marks = () => {
    const marks = useSelector((state) => state.qna.marks)
    return <div>Marks : {marks}</div>
}

export default Marks
