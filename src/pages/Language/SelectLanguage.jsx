import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { useQuery } from '@tanstack/react-query'
import { fetchAllLanguages } from '../../services/Language/language'
import toast from 'react-hot-toast'
import { addLanguages } from '../../store/reducers/languageReducer'
import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import LanguageCard from '../../components/General/LanguageCard'

const SelectLanguage = () => {
    const languages = useSelector((state) => state.language.languages)
    const token = Cookies.get('token')
    const dispatch = useDispatch()

    const { data, isLoading, isSuccess, isError } = useQuery({
        queryFn: () => fetchAllLanguages({ token }),
        queryKey: ['Language']
    })

    if (!isLoading) {
        dispatch(addLanguages(data?.data))
    }

    return (
        <div>
            <div className='flex items-center pt-10 h-screen mx-auto flex-col'>
                <Navbar />
                {/* Language selection */}
                <div className='flex flex-wrap gap-5 mt-10'>
                    {!isLoading && !isError && isSuccess && languages.length > 0 ? (
                        languages.map((language, index) => (
                            <LanguageCard key={index} language={language} />
                        ))
                    ) : (
                        <div className='flex justify-center'>
                            <h1 className='text-2xl font-semibold text-gray-600'>No languages found</h1>
                        </div>
                    )}
                </div>


            </div>
        </div>

    )
}

export default SelectLanguage
