import { useDispatch, useSelector } from "react-redux";
import TimeCounter from "../TimeCounter"
import { useEffect, useState } from "react";
import { addAnsweredQuestions, check, getRandomQuestion } from "../../store/reducers/qnaReducer";

const Question = () => {
  const [ answer, setAnswer ] = useState("");
  const isOver = useSelector(state => state.qna.isOver)
  const question = useSelector((state) => state.qna.randomQuestions)

  // const answeredQuestion = useSelector(state => state.qna.answeredQuestions)
  const dispatch = useDispatch();
  console.log(question)

  useEffect(()=> {
    if (isOver) {
      dispatch(check({ romaji: question?.romaji, answer: answer }));
      dispatch(addAnsweredQuestions({ id: question?.id, answer: answer }));
      setAnswer("")
      dispatch(getRandomQuestion())
    }
  }, [isOver , question?.id])

  

  return (
    <div>
        {
          !isOver && <TimeCounter seconds={15} />
        }
        <form >
          <h4>Please fill the blank.</h4>
          <div className="py-5">
            What is the romaji of this kanji : {question?.kanji}
          </div>
          <input type="text" className="w-full border-b-2 border-black focus:border-none" placeholder="Enter the romaji" value={answer} onChange={(e)=>setAnswer(e.target.value)} />
        </form>
        </div>
  )
}

export default Question