import { useEffect, useState } from 'react';

export default function Background({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className="relative min-h-screen overflow-hidden">      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/4057631.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(1.05)',
          transform: `scale(1.05) translate(${mousePosition.x * 8 - 4}px, ${mousePosition.y * 8 - 4}px)`,
          transition: 'transform 0.7s ease-out'
        }}
      />      <div 
        className="absolute inset-0" 
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(0.5px)'
        }}
      />
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
