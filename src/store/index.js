import { configureStore } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import userReducer from './reducers/userReducer'
import languageReducer from './reducers/languageReducer'
import qnaReducer from './reducers/qnaReducer'

const userFromCookie = Cookies.get('user')
    ? JSON.parse(Cookies.get('user'))
    : null

const initialState = {
    user: {
        user: userFromCookie
    }
}

const store = configureStore({
    reducer: {
        user: userReducer,
        language: languageReducer,
        qna: qnaReducer
    },
    preloadedState: initialState
})

export default store
