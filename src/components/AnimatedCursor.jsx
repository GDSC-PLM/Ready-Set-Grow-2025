"use client";
import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'white',  // Changed from gradient to white
        mixBlendMode: 'difference'
      }}
      outerStyle={{
        background: 'linear-gradient(45deg, #4285F4, #EA4335, #FBBC05, #34A853)',
        mixBlendMode: 'difference'
      }}
      dots={[
        {
          size: 6,
          delay: 0.1,
          style: {
            backgroundColor: 'var(--color-primary)',
            opacity: 0.8
          }
        },
        {
          size: 4,
          delay: 0.15,
          style: {
            backgroundColor: 'var(--color-primary)',
            opacity: 0.6
          }
        },
        {
          size: 3,
          delay: 0.2,
          style: {
            backgroundColor: 'var(--color-primary)',
            opacity: 0.4
          }
        }
      ]}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom-clickable',
          options: {
            scale: 1.3,
            innerSize: 12
          },
        },
      ]}
    />
  );
}



