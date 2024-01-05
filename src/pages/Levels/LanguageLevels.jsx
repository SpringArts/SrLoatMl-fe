import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { fetchLanguageLevels } from '../../services/Language/language'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLanguageLevel } from '../../store/reducers/languageReducer'
import Navbar from '../../components/Navbar'
import LanguageLevelCard from '../../components/General/LanguageLevelCard'

const LanguageLevels = () => {
    const { languageId } = useParams()
    const token = Cookies.get('token')
    const dispatch = useDispatch()
    const languageLevels = useSelector((state) => state.language.languageLevels)

    const { data, isError, isLoading, isSuccess } = useQuery({
        queryFn: () => fetchLanguageLevels({ token, languageId }),
        queryKey: ['language-level', languageId]
    })

    useEffect(() => {
        dispatch(addLanguageLevel(data?.data))
    }, [isLoading])


    return (
        <div className='flex items-center pt-10 h-screen mx-auto flex-col'>
            <Navbar />
            <div className='flex flex-wrap gap-5 mt-10'>
                <div className='flex flex-wrap gap-5 mt-10'>
                    {(!isLoading && !isError && isSuccess && languageLevels && languageLevels.length > 0) ? (
                        languageLevels.map((level, index) => (
                            <LanguageLevelCard key={index} level={level} />
                        ))
                    ) : (
                        <div className='flex justify-center'>
                            <h1 className='text-2xl font-semibold text-gray-600'>No Chapters found</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LanguageLevels
