import { motion } from "framer-motion";
import { Code, LayoutDashboard, Boxes, PenTool } from "lucide-react";
import Divider from "../ui/divider.tsx";
import Section from "../ui/section.tsx";

const items = [
  {
    icon: <LayoutDashboard size={22} />,
    title: "Complex Interfaces & Data Dashboards",
    description:
      "Design and development of advanced dashboards, admin panels, and data-heavy interfaces with structured architecture and polished user experience.",
  },
  {
    icon: <Boxes size={22} />,
    title: "Interactive Planners & Visual Editors",
    description:
      "Building drag-and-drop planners with precise geometry, scaling logic, canvas rendering, and interactive 2D/3D visual systems.",
  },
  {
    icon: <PenTool size={22} />,
    title: "UI Architecture & User Experience",
    description:
      "Well-structured, scalable component systems with a strong focus on usability, smooth interactions, and modern UX patterns.",
  },
  {
    icon: <Code size={22} />,
    title: "Advanced Frontend Development",
    description:
      "Hands-on experience with React, Next.js, Redux, Canvas, Tailwind CSS, and Framer Motion, focused on building performant and scalable user interfaces.",
  },
];
export default function WhatIDo() {
  return (
    <Section heading="What I Do" subheading="My primary areas of expertise">
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
