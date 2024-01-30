import { useDispatch, useSelector } from "react-redux";
import TimeCounter from "../TimeCounter"
import { useEffect, useState } from "react";
import { addAnsweredQuestions, check, getRandomQuestion } from "../../store/reducers/qnaReducer";
import { AlarmClockCheck, ArrowRight } from 'lucide-react';
import Cookies from "js-cookie";
import { questionToBackend } from "../../services/QNA/qna";

const Question = ({setPage , page , meta}) => {
  const [ answer, setAnswer ] = useState("");
  const isOver = useSelector(state => state.qna.isOver)
  const question = useSelector((state) => state.qna.randomQuestions)

  const answeredQuestion = useSelector(state => state.qna.answeredQuestions)
  const token= Cookies.get("token")
  const dispatch = useDispatch();
  console.log(question)

  useEffect(() => {
    if (isOver) {
      dispatch(check({ romaji: question?.romaji, answer: answer }));
      dispatch(addAnsweredQuestions({ id: question?.id, answer: answer }));
      setAnswer("")
      dispatch(getRandomQuestion())
    }

    if(answeredQuestion.length % 10 === 0 && meta?.totalPages >= page ){
      const data = questionToBackend({answeredQuestion, token})
      console.log(data)
      setPage(p => p + 1)
    }
  }, [isOver , question?.id])


  return (
    <div>

      <div className="flex shadow-lg border rounded-lg border-gray-300 flex-col p-5 min-w-[300px] md:min-w-[600px]">
        <div className="flex justify-between w-auto items-center ">
          <div className="flex">
            <AlarmClockCheck className="inline-block  transform transition duration-300 ease-in-out hover:scale-105" />
            {
              !isOver && <TimeCounter seconds={15} />
            }
          </div>
          <button className="border bg-gray-800 text-white p-2 rounded-md hover:bg-gray-900 transform transition duration-300 ease-in-out hover:scale-105"> Next <ArrowRight className="inline-block" /> </button>
        </div>

        <div>
          <div className="mt-10">
            <form >
              <h4 className="font-semibold text-lg">Questions 1 of 10 </h4>
              <div className="py-5 font-semibold text-base">
                What is the romaji of this kanji : {question?.kanji}
              </div>
              <input
                type="text"
                className="w-full border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2 px-3 placeholder-gray-500"
                placeholder="Enter the romaji"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Question