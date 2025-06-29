import { useEffect, useRef } from 'react';

const useFadeInOnScroll = (options = { threshold: 0.35 }, effectName = 'fade-in') => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove('invisible');
          element.classList.add(effectName);
          observer.unobserve(element);
        }
      },
      options
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options, effectName]);

  return ref;
};

export default useFadeInOnScroll;