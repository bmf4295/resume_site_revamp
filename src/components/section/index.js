import React from 'react';

// Define the component using React.forwardRef
const Section = React.forwardRef(({ children, id, title, className }, ref) => {
  return (
    <section ref={ref} id={id} className={`w-full py-12 ${className || ''}`}>
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <h2 className="text-4xl font-bold mb-12 text-white text-center">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
});

// Use a default export
export default Section;