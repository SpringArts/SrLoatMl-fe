import { Link } from "react-router-dom"

const LanguageLevelCard = ({ level }) => {
    return (
        <div>
            <div className='shadow-lg border p-5 rounded-lg max-w-96 transform transition duration-300 ease-in-out hover:scale-105'>

                <div className='flex justify-center'>
                    <Link to={`/language-chapters/${level?.id}`} className='text-xl font-semibold mb-2 uppercase text-gray-600'>
                        <h3> {level?.level}</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LanguageLevelCard