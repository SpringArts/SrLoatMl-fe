import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import QuestionAndAnswer from './pages/Q&A/QuestionAndAnswer'
import PrivateRoute from './utils/PrivateRoute'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import { Toaster } from 'react-hot-toast'
import Error from './pages/Error/Error'
import SelectLanguage from './pages/Language/SelectLanguage'
import LanguageLevels from './pages/Levels/LanguageLevels'

const App = () => {
    return (
        <div className='font-Opensans'>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route element={<PrivateRoute />}>
                    {/* the route that need authentication are writeen in here */}
                    <Route path='/q&a' element={<QuestionAndAnswer />} />
                    <Route path='/languages' element={<SelectLanguage />} />
                    <Route
                        path='/language-levels/:languageId'
                        element={<LanguageLevels />}
                    />
                </Route>

                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route path='*' element={<Error />} />
            </Routes>
            <Toaster />
        </div>
    )
}

export default App
