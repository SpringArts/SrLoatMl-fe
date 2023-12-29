import axios from 'axios'

export const fetchAllLanguages = async ({ token }) => {
    try {
        const { data } = await axios(
            'http://127.0.0.1:8000/api/app/languages',
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

export const fetchLanguageLevels = async ({ token , languageId }) => {
    try {
        const { data } = await axios(
            `http://127.0.0.1:8000/api/app/language-levels?languageId=${languageId}`,
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

export const fetchLanguagesChapters = async ({ token }) => {
    try {
        const { data } = await axios(
            'http://127.0.0.1:8000/api/app/language-chapters',
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
