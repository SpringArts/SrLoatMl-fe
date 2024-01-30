import { configureStore } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import userReducer from './reducers/userReducer'
import languageReducer from './reducers/languageReducer'
import qnaReducer from './reducers/qnaReducer'
import { qnaApi } from '../services/QNA/qnaApi'

const userFromCookie = Cookies.get('user')
    ? JSON.parse(Cookies.get('user'))
    : null

const initialState = {
    user: {
        user: userFromCookie
    },
    qna : {
        answeredQuestions : [],
        marks: 0
    }
}

const store = configureStore({
    reducer: {
        [qnaApi.reducerPath]: qnaApi.reducer,
        user: userReducer,
        language: languageReducer,
        qna: qnaReducer
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(qnaApi.middleware)
})

export default store
