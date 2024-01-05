import Navbar from "../../components/Navbar";

const AboutUs = () => {
    return (
        <div className='flex items-center pt-10 h-screen mx-auto flex-col'>
            <Navbar />

            <div className='flex flex-col items-center mt-10'>
                <h1 className='text-4xl font-bold mb-6'>About Us</h1>

                <div className='flex flex-wrap justify-center gap-5 max-w-6xl mx-auto'>
                    <div className='flex flex-col rounded-lg shadow-md p-6 w-full md:w-1/3 cursor-pointer hover:shadow-lg'>
                        <article className="group">
                            <img
                                alt="Lava"
                                src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">
                                <a href="#">
                                    <h3 className="text-lg font-medium text-gray-900">Finding the Journey to Mordor</h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                                    mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                                    dignissimos. Molestias explicabo corporis voluptatem?
                                </p>
                            </div>
                        </article>
                    </div>

                    <div className='flex flex-col rounded-lg shadow-md p-6 w-full md:w-1/3 cursor-pointer hover:shadow-lg'>
                        <article className="group">
                            <img
                                alt="Lava"
                                src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div className="p-4">
                                <a href="#">
                                    <h3 className="text-lg font-medium text-gray-900">Finding the Journey to Mordor</h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                                    mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                                    dignissimos. Molestias explicabo corporis voluptatem?
                                </p>
                            </div>
                        </article>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AboutUs;
