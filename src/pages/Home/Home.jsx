import Navbar from "../../components/Navbar"
import Welcome from '../../assets/images/LandingPage.png'

const Home = () => {

    return (
        <div className='flex items-center pt-10 h-screen mx-auto flex-col'>
            <Navbar />
            <div className="mt-20">
                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative h-64 sm:h-80 lg:h-auto">
                                <img
                                    alt="Welcome"
                                    src={Welcome}
                                    className="absolute inset-0 w-full h-full object-cover lg:rounded-lg lg:order-last lg:static lg:h-full lg:w-auto transition group-hover:grayscale-[50%]"
                                />
                            </div>

                            <div className="lg:py-8">
                                <h2 className="text-3xl font-bold sm:text-4xl">Welcome to the Exam Challenge!</h2>

                                <p className="mt-4 text-gray-600">
                                    Are you ready to test your skills and knowledge? Join us in this exciting exam challenge where you can showcase your abilities and compete with others. It's an opportunity to learn, grow, and succeed!
                                </p>

                                <a
                                    href="/languages"
                                    className="mt-8 inline-block rounded bg-gray-700 px-8 py-3 text-sm font-medium text-white transform transition hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                    Let's Challenge
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home