import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const userInitialState = { user: null, token: null }

const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        addUser: (state, { payload }) => {
            state.user = payload.data
            state.token = payload.access_token
            Cookies.set('user', JSON.stringify(state.user), { expires: 365 })
            Cookies.set('token', state.token, { expires: 365 })
        },
        resetUser: (state) => {
            ;(state.user = null),
                (state.token = null),
                Cookies.remove('user'),
                Cookies.remove('token')
        }
    }
})

export const { addUser, resetUser } = userSlice.actions
export default userSlice.reducer
