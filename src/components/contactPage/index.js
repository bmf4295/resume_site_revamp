import Footer from '../footer';

const Contact = () => {
    const handleEmailClick = () => {
        window.location.href = "mailto:your.email@example.com";
    };

    return (
        <div data-testid="contact" className="flex flex-col pt-8" id="Contact">
            <div className="flex-grow px-6">
                <h2 className="text-4xl font-bold mb-12 text-white text-center">Contact Me</h2>

                <div className="max-w-2xl mx-auto w-full">
                    {/*Contact Invitation*/}
                    <p className="text-center text-lg text-white mb-12">
                        I'm open to new opportunities and collaborations. Whether you have a project in mind,
                        want to discuss potential opportunities, or just want to connect, feel free to reach out
                        through any of the methods below. I will get back to you as soon as possible!
                    </p>

                    {/* Contact buttons container */}
                    <div className="flex flex-wrap justify-center gap-6">

                        {/*Resume button*/}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
                        >
                             Resume{" "}
                            <i className="fas fa-external-link-alt text-xs ml-1"></i>
                        </a>

                        {/* LinkedIn Link */}
                        <a
                            href="https://www.linkedin.com/in/brady-friese/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-lg hover:bg-[#006399] transition-colors"
                        >
                            <i className="fab fa-linkedin text-xl"></i>
                            <span>LinkedIn</span>
                        </a>

                        {/* GitHub Link */}
                        <a
                            href="https://github.com/bmf4295"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            <i className="fab fa-github text-xl"></i>
                            <span>GitHub</span>
                        </a>

                        {/* Alternative Email Button */}
                        <button
                            onClick={handleEmailClick}
                            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                        >
                            <i className="fas fa-paper-plane text-xl"></i>
                            <span>Contact Me</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer at bottom */}
            <Footer />
        </div>
    );
};

export default Contact;