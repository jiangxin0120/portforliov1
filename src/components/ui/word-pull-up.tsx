import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface WordPullUpProps {
  words: string;
  className?: string;
}

const WordPullUp: React.FC<WordPullUpProps> = ({ words, className }) => {
  const wordsArray = words.split(" ");

  return (
    <div className={cn("overflow-hidden", className)}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={idx}
          className="inline-block mr-2"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            delay: idx * 0.2,
            ease: [0.33, 1, 0.68, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default WordPullUp; 