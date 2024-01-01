import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { fetchLanguagesChapters } from '../../services/Language/language'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLanguageChatpers } from '../../store/reducers/languageReducer'

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
        <div className='flex items-center justify-center h-screen mx-auto max-w-7xl'>
            <div className='p-10 border'>
                <h3 className=''>Select your Chapters</h3>
                <ul>
                    {!isLoading &&
                        !isError &&
                        isSuccess &&
                        languageChapters?.map((language, index) => (
                            <li key={index}>
                                <Link
                                    to={`/q&a?languageLevelId=${languageLevelId}&languageChapterId=${language.id}`}
                                >
                                    {language.chapter}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default Chapter
