import { motion } from "framer-motion";
import { Code, LayoutDashboard, Boxes, PenTool } from "lucide-react";
import Divider from "../ui/divider.tsx";
import Section from "../ui/section.tsx";

const items = [
  {
    icon: <LayoutDashboard size={22} />,
    title: "Advanced UI & Dashboards",
    description:
      "I design and build complex dashboards, admin tools, and data-driven interfaces with clean architecture and smooth UX.",
  },
  {
    icon: <Boxes size={22} />,
    title: "Room Planners & Visual Editors",
    description:
      "Expertise in drag-and-drop systems, geometric calculations, scaling logic, canvas rendering, and interactive 2D/3D visualization.",
  },
  {
    icon: <PenTool size={22} />,
    title: "Frontend Architecture & UX",
    description:
      "Clean, maintainable component architecture with strong UI/UX sense, seamless interactions, and modern design patterns.",
  },
  {
    icon: <Code size={22} />,
    title: "Modern Frontend Engineering",
    description:
      "Deep experience with React, Angular, Zustand, TanStack Query, D3, Canvas, Tailwind, and Framer Motion.",
  },
];

export default function WhatIDo() {
  return (
    <Section heading="What I Do" subheading="My core areas of specialization.">
      <div className="max-w-6xl mx-auto">
        <Divider />

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  delay: index * 0.1,
                },
              }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.99,
                  transition: { duration: 0.2 },
                }}
                transition={{ duration: 0.2 }}
                className="
                  p-4 sm:p-6
                  rounded-xl
                  border border-border/60 dark:border-white/10
                  bg-background/60 dark:bg-[#1A1A1A]/60
                  backdrop-blur-sm
                  shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.35)]
                  hover:shadow-md transition-shadow duration-100 h-full
                "
              >
                {/* ICON */}
                <motion.div
                  className="text-blue-500 dark:text-blue-400 mb-3"
                  whileHover={{ scale: 1.15, rotate: 3 }}
                >
                  {item.icon}
                </motion.div>

                {/* TITLE */}
                <h3 className="font-semibold text-lg sm:text-xl mb-2 text-foreground dark:text-white/90">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
