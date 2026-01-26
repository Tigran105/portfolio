import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import Section from "../ui/section.tsx";
import Divider from "../ui/divider.tsx";
import { useData } from "../../store/data.ts";

export default function Education() {
  const education = useData((state) => state.education);

  return (
    <Section
      heading="Education"
      subheading="From learning the basics to crafting interactive, high-quality interfaces."
    >
      <Divider className="my-20" />

      <div className="space-y-12 sm:space-y-16 md:space-y-20 relative px-4 sm:px-0">
        {education.map((item, index) => (
          <motion.div
            key={item.time}
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
                <Circle
                  className="
                      h-7 w-7 text-blue-500 dark:text-blue-400
                      group-hover:scale-110 transition
                    "
                />
              </motion.div>

              {/* Fade-in connector line */}
              {index !== education.length - 1 && (
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
                p-2 rounded-lg w-full
                transition
                group-hover:bg-muted/20
                dark:group-hover:bg-white/5
              "
              id={`education-${index}`} // Add ID for scrolling
            >
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.05 }}
                viewport={{ once: true }}
                className="text-sm text-foreground/60 mb-1"
              >
                {item.time}
              </motion.div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <motion.h3
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg sm:text-xl font-semibold group-hover:text-foreground transition"
                >
                  {item.institution}
                </motion.h3>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
