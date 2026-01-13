import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  children: ReactNode;
  delay?: number;
}

export default function ProjectCard({ children, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.4,
          delay,
        },
      }}
      viewport={{ once: true }}
    >
      <motion.div
        viewport={{ once: true }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.1 },
        }}
        className="
        rounded-xl overflow-hidden p-4
        border border-border dark:border-white/10
        bg-background/70 dark:bg-[#111]/60
        shadow-sm hover:shadow-md dark:hover:shadow-lg
        aspect-video flex items-center justify-center
        text-foreground/70 dark:text-foreground/50
      "
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
