import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import QuestionAndAnswer from './pages/Q&A/QuestionAndAnswer'
import PrivateRoute from './utils/PrivateRoute'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import { Toaster } from 'react-hot-toast'

const App = () => {
    return (
        <div className='font-Opensans'>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route element={<PrivateRoute />}>
                    {/* the route that need authentication are writeen in here */}
                    <Route path='/q&a' element={<QuestionAndAnswer />} />
                </Route>

                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
            <Toaster />
        </div>
    )
}

export default App
