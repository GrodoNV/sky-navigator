import React, { useState } from 'react';
import { Plane } from 'lucide-react';

const AnimatedPlane = ({ onClick }) => {
  const [isChecked, setIsChecked] = useState(false);
  
  const handleClick = () => {
    setIsChecked(!isChecked);
    if (onClick) onClick();
  };

  return (
    <div className="font-['Caveat'] caveat-custom italic font-bold text-[1.2em] flex justify-center items-center ">
      <input
        type="radio"
        className="hidden"
        checked={isChecked}
        onChange={() => {}}
      />
      <label
        className={`
          relative
          w-[300px]
          h-[60px]
          cursor-pointer
          flex
          justify-center
          items-center
          p-2
          text-right
          overflow-hidden
          transition-all
          duration-[2000ms]
          ease-in-out
          clip-path-custom
          bg-white/10
          backdrop-blur-lg
          border
          border-white/20
          shadow-lg

          // Efectos de hover
          hover:scale-[1.02]
          hover:shadow-xl
          hover:brightness-110
          active:scale-[0.98]
          transition-transform
          duration-300
          ease-out
        `}
        onClick={handleClick}
      >
        <div
          className={`
            absolute
            inset-[1px]
            z-[1]
            ${isChecked ? 'bg-[#ffffff00]' : 'bg-[#ffffff00]'}
            clip-path-custom
            backdrop-blur-md
          `}
        />
        
        <div
          className={`
            relative
            z-[2]
            text-white
            text-[1em]
            transition-all
            duration-[2000ms]
            ease-linear
            ${isChecked
              ? 'text-shadow-active'
              : 'text-shadow-default'
            }
          `}
        >
          <div className="flex items-center justify-center gap-2">
            <Plane size={24} className="text-white/80 transition-transform group-hover:rotate-6" />
            ¡Despegamos ya!
          </div>
        </div>

        {[
          { boxShadow: '-17px -19px 20px #9e30a9', gradient: 'conic-gradient(#9e30a9, transparent, transparent, transparent, transparent, transparent, transparent, #9e30a9)' },
          { boxShadow: '-17px -19px 10px #4090b5', gradient: 'conic-gradient(#4090b5, transparent, transparent, transparent, transparent, transparent, transparent, transparent, #4090b5)' }
        ].map((layer, index) => (
          <div
            key={index}
            className={`
              absolute
              h-[300px]
              aspect-[1.5/1]
              animate-rotate
              ${index === 0 ? 'animate-delay-[-2s]' : ''}
              ${isChecked ? 'opacity-100' : 'opacity-50'}
              transition-opacity
              duration-500
            `}
            style={{
              boxShadow: layer.boxShadow,
              backgroundImage: layer.gradient
            }}
          />
        ))}
      </label>
    </div>
  );
};

export default AnimatedPlane;
