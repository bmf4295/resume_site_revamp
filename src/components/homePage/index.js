import backgroundImage from '../assets/background.jpg';
//TODO: Finish adding content to the All pages. 
const Home = () => {
    return (
        <div data-testid="home" className="relative h-[100vh] w-full overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            
            {/* Content with semi-transparent overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50">
                <div className="w-full max-w-4xl px-6">
                    <h1 className="mb-4 text-2xl font-bold text-white md:text-5xl lg:text-6xl">
                     Welcome!
                    </h1>
                    <h1 className="mb-4 text-2xl font-bold text-white md:text-5xl lg:text-6xl">
                        I am Brady Friese.
                    </h1>
                    <p className="mb-4 text-lg text-white md:text-xl">
                        I build reliable, user-focused applications from front to back.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;