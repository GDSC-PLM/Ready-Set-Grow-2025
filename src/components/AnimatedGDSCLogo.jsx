import { motion } from "framer-motion";

export default function AnimatedGDSCLogo() {
  return (
    <motion.svg
      width="498"
      height="295"
      viewBox="0 0 498 295"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.8
      }}
    >
      {/* Main shapes */}
      <motion.rect
        x="70.8877"
        y="178.939"
        width="157.554"
        height="59.5936"
        rx="29.7968"
        transform="rotate(-32.6666 70.8877 178.939)"
        fill="#211F22"
        initial={{ rotate: -32.6666 }}
        animate={{ 
          rotate: [-32.6666, -30, -32.6666],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
      {/* Add more motion elements for other parts of your SVG */}
      
      {/* Floating elements */}
      <motion.path
        d="M125.343 121.073C126.772 121.402 128.382 122.582 129.608 123.935C130.974 124.803 131.566 126.995 130.34 127.452C130.168 128.684 128.217 131.483 127.537 131.626C126.217 133.517 126.318 132.897 124.003 132.282C123.579 131.001 120.811 131.221 119.737 129.42C118.237 129.227 118.308 127.238 119.006 125.903C119.632 125.027 120.422 124.325 121.809 121.729C122.658 119.982 124.71 120.279 125.343 121.073Z"
        fill="#FDB528"
        initial={{ y: 0 }}
        animate={{ 
          y: [-5, 5, -5],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
      
      {/* Add more animated paths for other floating elements */}
    </motion.svg>
  );
}