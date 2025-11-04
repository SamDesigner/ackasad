"use client"
import { motion } from "framer-motion";

export default function BallSpinner() {
  const balls = Array.from({ length: 8 });

  return (
    <div className="flex items-center justify-center h-full  ">
      <div className="relative w-10 h-10">
        {balls.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transformOrigin: "center -10px",
            }}
            animate={{ rotate: 360 }}
            transition={{  
              repeat: Infinity,
              duration: 1,
              ease: "linear",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
}


