import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    questions: [],
    answeredQuestions: [],
    marks: 0,
    times: 0
}

const qnaSlice = createSlice({
    name: 'qna',
    initialState: initialState,
    reducers: {
        addQuestions: (state, { payload }) => {
            state.questions = payload.data
        },
        addAnsweredQuestions: (state, { payload }) => {
            state.answeredQuestions.push(payload.data)
        },
        check: (state, action) => {
            const { id, answer } = action.payload
            const question = state.questions.find((q) => q.id === id)

            if (question.romaji === answer) {
                state.marks += 1
            }
        },
        getRandomQuestion: (state) => {
            if (state.questions.length > 0) {
                const randomIndex = Math.floor(
                    Math.random() * state.questions.length
                )
                const randomQuestion = state.questions[randomIndex]

                state.questions.splice(randomIndex, 1)

                return randomQuestion
            }
        }
    }
})

export const { addQuestions, addAnsweredQuestions, check, getRandomQuestion } =
    qnaSlice.actions
export default qnaSlice.reducer
