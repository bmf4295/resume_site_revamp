

const Home = () => {
    return (
        <div className="flex flex-col bg-inherit min-h-screen">
            <section 
                id="Home" 
                className="flex flex-col h-[calc(100vh-64px)] justify-center items-center px-6 text-center mt-16"
            >
                <div className="w-full max-w-4xl">
                    <h1 className="mb-4 text-lg font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">
                        I am Brady Friese, based out of Japan.
                    </h1>
                    <p className="mb-4 dark:text-white">
                        I am a software engineer specializing in full 
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;