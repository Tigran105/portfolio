import { motion } from "framer-motion";
import { CheckCircle, Circle } from "lucide-react";
import Section from "../ui/section.tsx";
import Divider from "../ui/divider.tsx";

export default function Experience() {
  const timeline = [
    {
      year: "08.2020 - 12.2021",
      title: "BeeOnCode LLC",
      position: "Frontend Developer",
    },
    {
      year: "01.2022 - 12.2022",
      title: "NWS LAB",
      position: "Frontend Engineer",
    },
    {
      year: "09.2022 - 02.2026",
      title: "Pixeria LAB",
      position: "React Engineer",
    },

    {
      year: "03.2024 - present",
      title: "UI & Visualization Engineer - Lens Chart Visualization",
      position: "UI & Visualization Engineer",
    },
  ];

  return (
    <Section
      heading="Experience"
      subheading="My path as a developer - focused, disciplined, and built on consistent improvement."
    >
      <Divider className="my-20" />

      <div className="space-y-12 sm:space-y-16 md:space-y-20 relative px-4 sm:px-0">
        {timeline.reverse().map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group flex gap-4 sm:gap-7 md:gap-8 cursor-default"
          >
            {/* DOT + CONNECTOR */}
            <div className="flex flex-col items-center">
              {/* Dot animation */}
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {index === 0 ? (
                  <CheckCircle
                    className="
                      h-7 w-7 text-blue-500 dark:text-blue-400
                      drop-shadow-[0_0_6px_rgba(59,130,246,0.4)]
                      group-hover:scale-110 transition
                    "
                  />
                ) : (
                  <Circle
                    className="
                      h-7 w-7 text-blue-500 dark:text-blue-400
                      group-hover:scale-110 transition
                    "
                  />
                )}
              </motion.div>

              {/* Fade-in connector line */}
              {index !== timeline.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-px bg-border flex-1 mt-1"
                ></motion.div>
              )}
            </div>

            {/* CONTENT */}
            <motion.div
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
              className="
                p-2 rounded-lg
                transition
                group-hover:bg-muted/20
                dark:group-hover:bg-white/5
              "
            >
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.05 }}
                viewport={{ once: true }}
                className="text-sm text-foreground/60"
              >
                {item.year}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl font-semibold group-hover:text-foreground transition"
              >
                {item.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.15 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base text-foreground/80 leading-relaxed mt-1 group-hover:text-foreground/90 transition"
              >
                {item.position}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
