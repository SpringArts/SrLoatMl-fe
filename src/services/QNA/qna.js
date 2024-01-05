import axios from 'axios'

export const fetchAllQuestions = async ({
    token,
    page,
    languageLevelId,
    languageChapterId
}) => {
    try {
        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/app/words?page=${page}&languageLevelId=${languageLevelId}&languageChapterId=${languageChapterId}`,
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


export const questionToBackend = async({ answeredQuestion, token}) => {
    const { data } = await axios.post("http://127.0.0.1:8000/api/app/exam", {
      data: answeredQuestion
    }, {
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        'Authorization': `Bearer ${token}`,
      }
    })
    return data;
  }