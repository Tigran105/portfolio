import React from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, LayoutGrid, Cpu } from "lucide-react";
import Divider from "../ui/divider.tsx";
import Section from "../ui/section.tsx";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        "React",
        "Angular",
        "Next.js",
        "TypeScript",
        "Redux",
        "Zustand",
        "Tailwind",
        "shadcn/ui",
        "TanStack Query",
      ],
    },
    {
      title: "UI Engineering",
      icon: <LayoutGrid className="h-6 w-6" />,
      skills: [
        "Component Architecture",
        "UI Systems",
        "Animations",
        "Responsive Design",
        "Interaction Design",
      ],
    },
    {
      title: "Visualization",
      icon: <Sparkles className="h-6 w-6" />,
      skills: [
        "Canvas",
        "Fabric.js",
        "D3.js",
        "Konva (learning)",
        "Custom Editors",
        "2D / 3D Interaction Logic",
      ],
    },
    {
      title: "Backend & Tools",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Electron.js",
        "Git / GitLab",
        "Refactoring",
        "Product Thinking",
      ],
    },
  ];

  return (
    <Section
      heading="Skills"
      subheading="A mix of engineering, UI craftsmanship, and clean architectural thinking."
    >
      <Divider />

      {/* SKILLS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {skillGroups.map((group, index) => (
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
              key={group.title}
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
              p-4 sm:p-6 rounded-xl
              border border-border/60 dark:border-white/10
              bg-background/60 dark:bg-[#1A1A1A]/60
              shadow-sm hover:shadow-md backdrop-blur-sm h-full
            "
            >
              {/* ICON */}
              <motion.div
                className="text-blue-500 dark:text-blue-400 mb-3"
                whileHover={{ scale: 1.15, rotate: 3 }}
              >
                {React.cloneElement(group.icon, {
                  className: "h-5 w-5 sm:h-6 sm:w-6",
                })}
              </motion.div>

              {/* TITLE */}
              <h3 className="text-base sm:text-lg font-semibold mb-3">
                {group.title}
              </h3>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
              px-3 py-1 rounded-md bg-muted/60 dark:bg-[#222]
              border border-border/60 dark:border-white/10
              text-xs transition hover:scale-105
            "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
