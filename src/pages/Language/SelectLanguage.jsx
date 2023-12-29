import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { useQuery } from '@tanstack/react-query'
import { fetchAllLanguages } from '../../services/Language/language'
import toast from 'react-hot-toast'
import { addLanguages } from '../../store/reducers/languageReducer'
import { useEffect } from 'react'

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
        <div className='flex items-center justify-center h-screen mx-auto max-w-7xl'>
            <div className='p-10 border'>
                <h3 className=''>Select your language</h3>
                <ul>
                    {!isLoading &&
                        !isError &&
                        isSuccess &&
                        languages.map((language, index) => (
                            <li key={index}>
                                <Link to={`/language-levels/${language.id}`}>
                                    {language.name}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default SelectLanguage
