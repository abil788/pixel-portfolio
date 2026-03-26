import React, { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = 0, direction = "up", threshold = 0.15 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return "translate-y-0 translate-x-0 opacity-100 scale-100";
    
    switch (direction) {
      case "up": return "translate-y-8 opacity-0";
      case "down": return "-translate-y-8 opacity-0";
      case "left": return "-translate-x-8 opacity-0";
      case "right": return "translate-x-8 opacity-0";
      case "scale": return "scale-95 opacity-0";
      default: return "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      className={`${getTransform()} transition-all duration-[800ms] ease-out ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
