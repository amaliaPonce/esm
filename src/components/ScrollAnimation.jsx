import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ScrollAnimation = ({ children, animationClasses }) => {
  const animatedElementRef = useRef(null);

  const addAnimationClasses = (element, classes) => {
    element.classList.add(
      'opacity-100',
      ...classes,
      'animate-once',
      'animate-duration-1000',
      'animate-ease-out',
      'animate-delay-300'
    );
  };

  useEffect(() => {
    const animatedElement = animatedElementRef.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          addAnimationClasses(animatedElement, animationClasses);
          observer.unobserve(animatedElement);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(animatedElement);

    return () => observer.disconnect();
  }, [animationClasses]);

  return <div ref={animatedElementRef} className="opacity-0">{children}</div>;
};

ScrollAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  animationClasses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ScrollAnimation;
