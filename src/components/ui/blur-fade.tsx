import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  delay?: number;
  inView?: boolean;
  className?: string;
}

const BlurFade: React.FC<BlurFadeProps> = ({ 
  children, 
  delay = 0, 
  inView = true,
  className 
}) => {
  return (
    <motion.div
      className={cn("relative", className)}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade; 