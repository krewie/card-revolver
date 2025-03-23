import React from "react";
import { motion } from "framer-motion";

type SlideProps = {
  children: React.ReactNode;
  sharedHeader?: React.ReactNode;
  scrollY?: number;
  className?: string;
};

export const Slide = ({ children, sharedHeader, scrollY = 0, className = "" }: SlideProps) => {
  const scale = scrollY <= 100 ? 1 - scrollY / 400 : 0.75;

  return (
    <section
      className={`h-screen w-full snap-start flex items-start justify-center pt-6 ${className}`}
    >
      <div className="w-[90%] max-w-2xl max-h-[90%] h-full bg-black-100 dark:bg-zinc-800 rounded-2xl shadow-2xl p-6 overflow-auto relative">
        {sharedHeader && (
          <motion.div
            style={{ scale }}
            className="sticky top-0 z-10 origin-top dark:bg-zinc-800/80 backdrop-blur p-2"
          >
            {sharedHeader}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};