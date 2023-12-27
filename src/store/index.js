import { configureStore } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import userReducer from './reducers/userReducer'

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
        user: userReducer
    },
    preloadedState: initialState
})

export default store
