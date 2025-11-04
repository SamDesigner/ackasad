"use client"
import { motion } from "framer-motion";

export default function RetroLoader() {
  return (
    <div className="flex items-center justify-center  ">
      <div className="w-[450px] h-2 bg-gray-700 rounded">
        <motion.div
          className="h-2 bg-primary rounded"
          initial={{ width: "20%" }}
          animate={{ width: "20%" }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}
