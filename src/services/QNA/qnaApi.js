import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const qnaApi = createApi({
    reducerPath: 'qnaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/app' }),
    tagTypes: ['Question&Answer'],
    endpoints: (builder) => ({
        getWords: builder.query({
            query: ({ token, page, languageLevelId, languageChapterId }) => ({
                url: `/words?limit=10&page=${page}&languageLevelId=${languageLevelId}&languageChapterId=${languageChapterId}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    authorization: `Bearer ${token}`
                }
            })
        })
    })
})

export const { useGetWordsQuery } = qnaApi
