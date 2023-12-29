import axios from 'axios'

export const fetchAllQuestions = async ({ token }) => {
    try {
        const { data } = await axios.get(
            'http://127.0.0.1:8000/api/app/words',
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return data
    } catch (error) {
        if (error.response && error.response.data.message)
            throw new Error(error.response.data.message)
        throw new Error(error.message)
    }
}
