const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer data-testid="footer" className="w-full mt-8 py-4  bg-gray-900/75 backdrop-blur-sm border-t border-gray-700">
            <div className="max-w-7xl mx-auto text-center px-6">
                <p className="text-sm text-gray-400">
                    © {currentYear} Brady Friese. All rights reserved.
                </p>
                <p className="text-sm text-gray-400  mt-2">
                    Check out the code for this site <a rel="noreferrer" target="_blank" href="https://github.com/bmf4295/resume_site_revamp" className=" hover:underline text-blue-400">here</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;