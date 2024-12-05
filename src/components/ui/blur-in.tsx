import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface BlurInProps {
  word: string;
  className?: string;
  delay?: number;
}

const BlurIn: React.FC<BlurInProps> = ({ word, className, delay = 0 }) => {
  return (
    <motion.span
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={cn("inline-block", className)}
    >
      {word}
    </motion.span>
  );
};

export default BlurIn; 