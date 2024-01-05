import { Link } from 'react-router-dom'
import LangOne from '../../assets/images/LangOne.png'
import LangTwo from '../../assets/images/LangTwo.png'
import LangThree from '../../assets/images/LangThree.png'


const getImageForLanguage = (id) => {
    console.log(id);
    if (id === 1) {
        return LangOne;
    } else if (id === 2) {
        return LangTwo;
    }
    else if (id === 3) {
        return LangThree;
    }
    return DefaultImage;
};

const LanguageCard = ({ language }) => {
    const languageImage = getImageForLanguage(language.id);

    return (
        <div>
            <div className='shadow-lg border p-5 rounded-lg max-w-96 transform transition duration-300 ease-in-out hover:scale-105'>
                <img
                    src={languageImage}
                    alt=""
                    className="h-[250px] w-full object-cover rounded-t-lg"
                />
                <div className='p-4 text-center'>
                    <h3 className='text-xl font-semibold mb-2 uppercase text-gray-600'>{language.name}</h3>
                    <p className='text-gray-500 mb-4'>
                        Wanna Learn {language.name} ? Then, this is the place for you.
                    </p>
                    <div className='flex justify-center'>
                        <Link to={`/language-levels/${language.id}`} className='bg-[#eca26d] hover:bg-[#f39450] text-white font-bold py-2 px-4 rounded'>
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default LanguageCard