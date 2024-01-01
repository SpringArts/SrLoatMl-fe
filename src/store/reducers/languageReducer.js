import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    languages: [],
    languageLevels: [],
    languageChapters: [],
    selectedLanguage: undefined,
    selectedLanguageLevel: undefined,
    selectedLanguageLevelChapters: undefined
}

const languageSlice = createSlice({
    name: 'language',
    initialState: initialState,
    reducers: {
        addLanguages: (state, { payload }) => {
            state.languages = payload
        },
        addLanguageLevel: (state, { payload }) => {
            state.languageLevels = payload
        },
        addLanguageChatpers: (state, { payload }) => {
            state.languageChapters = payload
        },
        addSelectedLanguage: (state, { payload }) => {
            state.selectedLanguage = payload
        },
        addSelectedLanguageLevel: (state, { payload }) => {
            state.selectedLanguageLevel = payload
        },
        addSelectedLanguageChapter: (state, { payload }) => {
            state.selectedLanguageChapter = payload
        }
    }
})

export const {
    addLanguages,
    addLanguageLevel,
    addLanguageChatpers,
    addSelectedLanguage,
    addSelectedLanguageLevel,
    addSelectedLanguageChapter
} = languageSlice.actions
export default languageSlice.reducer
