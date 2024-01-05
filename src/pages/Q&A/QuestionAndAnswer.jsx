import { useDispatch, useSelector } from 'react-redux'
import Marks from '../../components/Marks'
import Question from '../../components/Question/Question'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { fetchAllQuestions } from '../../services/QNA/qna'
import { useEffect, useState } from 'react'
import {
    addQuestions,
    getRandomQuestion,
    resetAnsweredQuestions
} from '../../store/reducers/qnaReducer'
import { useSearchParams } from 'react-router-dom'
import { useGetWordsQuery } from '../../services/QNA/qnaApi'
import Navbar from '../../components/Navbar'

const QuestionAndAnswer = () => {
    const params = new URLSearchParams(document.location.search)
    const languageLevelId = params.get('languageLevelId')
    const languageChapterId = params.get('languageChapterId')
    const [page, setPage] = useState(1)
    const isOver = useSelector((state) => state.qna.isOver)
    const questions = useSelector((state) => state.qna.questions)
    const answeredQuestion = useSelector((state) => state.qna.answeredQuestions)
    const dispatch = useDispatch()
    const token = Cookies.get('token')

    const { data, isSuccess, isLoading , refetch } = useGetWordsQuery({
        token,
        page,
        languageLevelId,
        languageChapterId
    })

    // const { data, isLoading, isError, isSuccess } = useQuery({
    //     queryFn: () => fetchAllQuestions({token, page, languageLevelId, languageChapterId}),
    //     queryKey: ["question", page],
    //     onSuccess: (response) => {
    //         console.log("Ok par", response);
    //     }
    // });

    useEffect(() => {
        dispatch(addQuestions(data?.data))
    }, [isSuccess, isLoading , page])

    useEffect(()=> {
        refetch();
        // dispatch(resetAnsweredQuestions())
        console.log("page number changed to " + page)
    }, [page])

    if(data?.meta?.totalPages === page && questions?.length === 0){
        alert("No questions")
    }

    console.log('Questions ', questions)
    console.log('Total pages', data?.meta?.totalPages)
    // console.log('Random Question ', randomQuestion)
    console.log('Ansered Question ', answeredQuestion)

    useEffect(() => {
        dispatch(getRandomQuestion())
    }, [questions?.length > 0])

    return (
        <div className='flex items-center pt-10 h-screen mx-auto flex-col'>
            <Navbar />
            <div className='mt-20'>
                <Marks />
                <Question setPage={setPage} page={page} meta={data?.meta} />
            </div>
        </div>
    )
}

export default QuestionAndAnswer
