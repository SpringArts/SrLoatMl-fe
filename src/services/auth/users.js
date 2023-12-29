import axios from 'axios'

export const login = async ({ email, password }) => {
    try {
        const { data } = await axios.post(
            'http://127.0.0.1:8000/api/app/login',
            {
                email,
                password
            }
        )
        return data
    } catch (error) {
        if (error.response && error.response.data.message)
            throw new Error(error.response.data.message)
        throw new Error(error.message)
    }
}
