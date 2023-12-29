import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { fetchLanguageLevels } from '../../services/Language/language'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLanguageLevel } from '../../store/reducers/languageReducer'

const LanguageLevels = () => {
    const { languageId } = useParams()
    const token = Cookies.get("token")
    const dispatch = useDispatch();
    const languageLevels = useSelector(state => state.language.languageLevels)

    const {data , isError , isLoading , isSuccess} = useQuery({
        queryFn: () => fetchLanguageLevels({token , languageId}),
        queryKey: ['language-level', languageId],
    })

    useEffect(()=>{
        dispatch(addLanguageLevel(data?.data))
    },[isLoading])

    console.log("levels", languageLevels)

    return <div className='flex items-center justify-center h-screen mx-auto max-w-7xl'>
    <div className='p-10 border'>
        <h3 className=''>Select your language</h3>
        <ul>
            {!isLoading &&
                !isError &&
                isSuccess &&
                languageLevels?.map((level, index) => (
                    <li key={index}>
                        <Link to={`/language-levels/${level?.id}`}>
                            {level?.level}
                        </Link>
                    </li>
                ))}
        </ul>
    </div>
</div>
}

export default LanguageLevels
