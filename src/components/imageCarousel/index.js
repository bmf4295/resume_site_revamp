import { useState, useEffect, useCallback } from "react";

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('image-slide-animation');

    const goToPrevious = () => {
        setAnimationClass('image-slide-animation-reverse'); // Set reverse animation
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // Wrap goToNextImage in useCallback
    const goToNextImage = useCallback(() => {
        setAnimationClass('image-slide-animation'); // Set forward animation
        // Use the functional update form of setState to avoid depending on `currentIndex`
        setCurrentIndex(prevIndex => {
            const isLastImage = prevIndex === images.length - 1;
            return isLastImage ? 0 : prevIndex + 1;
        });
    }, [images.length]); // The function only needs to be recreated if the number of images changes

    useEffect(() => {
        const intervalId = setInterval(goToNextImage, 10000);
        return () => clearInterval(intervalId);
    }, [goToNextImage]);

    return (
        <div data-testid="Carousel" className="relative w-full aspect-video bg-black/20 rounded-lg overflow-hidden">
            <img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Project screenshot"
                className={`w-full h-full object-contain rounded-lg ${animationClass}`}
            />
            {images.length > 1 && (
                <>
                    <button onClick={goToPrevious} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-opacity">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button onClick={goToNextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-opacity">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </>
            )}

        </div>
    );
};

export default ImageCarousel;