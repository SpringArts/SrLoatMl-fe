import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { fetchLanguagesChapters } from '../../services/Language/language'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLanguageChatpers } from '../../store/reducers/languageReducer'
import LanguageChapterCard from '../../components/General/LanguageChapterCard'
import Navbar from '../../components/Navbar'

const Chapter = () => {
    const { languageLevelId } = useParams()
    const token = Cookies.get('token')
    const dispatch = useDispatch()
    const languageChapters = useSelector(
        (state) => state.language.languageChapters
    )

    const { data, isLoading, isError, isSuccess } = useQuery({
        queryFn: () => fetchLanguagesChapters({ token, languageLevelId }),
        queryKey: ['language-chapters', languageLevelId]
    })

    console.log(data)

    useEffect(() => {
        console.log(data?.data)
        dispatch(addLanguageChatpers(data?.data))
    }, [isLoading])

    console.log(languageChapters)

    return (
        <div className='flex items-center pt-10 h-screen mx-auto flex-col'>
            <Navbar />
            <div className='flex flex-wrap gap-5 mt-10'>
                <div className='flex flex-wrap gap-5 mt-10'>
                    {(!isLoading && !isError && isSuccess && languageChapters && languageChapters.length > 0) ? (
                        languageChapters.map((language, index) => (
                            <LanguageChapterCard key={index} language={language} languageLevelId={languageLevelId} />
                        ))
                    ) : (
                        <div className='flex justify-center'>
                            <h1 className='text-2xl font-semibold text-gray-600'>No Kanji found</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Chapter
