// src/components/Slide.tsx
import React from "react";

type SlideProps = {
  children: React.ReactNode;
  className?: string;
};

export const Slide = ({ children, className = "" }: SlideProps) => {
  return (
    <section
      className={`h-screen w-full snap-start flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 ${className}`}
    >
      <div className="max-w-3xl w-[90%] h-[90%] bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl p-6">
        {children}
      </div>
    </section>
  );
};
