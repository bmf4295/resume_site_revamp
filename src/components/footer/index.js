const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer data-testid="footer" className="w-full mt-8 py-4 bg-white/75 dark:bg-gray-900/75 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto text-center px-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    © {currentYear} Brady Friese. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;