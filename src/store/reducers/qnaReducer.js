import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
    questions: [],
    answeredQuestions: [],
    randomQuestions: undefined,
    marks: 0,
    times: 0,
    isOver: false,
    isTrue: true
}

const qnaSlice = createSlice({
    name: 'qna',
    initialState: initialState,
    reducers: {
        addQuestions: (state, { payload }) => {
            const dataArray = Array.isArray(payload) ? payload : [payload]
            state.questions = [...dataArray]
        },
        addAnsweredQuestions: (state, action ) => {
            const { id , answer } = action.payload;
            state.answeredQuestions.push({id, answer})
            state.isOver = !state.isOver
        },
        check: (state, action) => {
            const { romaji, answer } = action.payload
            
            if (romaji === answer) {
                state.marks += 1
                state.isTrue = true
                toast.success("Correct answer")
            }else{
                state.isTrue = false
                toast.error(`The correct answer is ${romaji}` )
            }
        },
        changeIsOver: (state) => {
            state.isOver = !state.isOver
        },
        getRandomQuestion: (state) => {
            if (state.questions?.length > 0) {
                const randomIndex = Math.floor(
                    Math.random() * state.questions?.length
                )
                state.randomQuestions = state.questions[randomIndex]

                // Create a new array without the selected question
                state.questions = state.questions.filter(
                    (_, index) => index !== randomIndex
                )
            }else{
                alert("Good Job!")
                location.href = "/"
            }
        }
    }
})

export const {
    addQuestions,
    addAnsweredQuestions,
    check,
    getRandomQuestion,
    changeIsOver
} = qnaSlice.actions
export default qnaSlice.reducer
