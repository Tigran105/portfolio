import { motion } from "framer-motion";
import { CheckCircle, Circle, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "../ui/section.tsx";
import Divider from "../ui/divider.tsx";
import { useData } from "../../store/data.ts";

export default function Experience() {
  const experience = useData((state) => state.experience);
  const navigate = useNavigate();

  const handleViewAll = (itemId?: string) => {
    navigate("/experience", {
      state: { scrollToId: itemId },
      // OR as URL parameter: navigate(`/experience?item=${itemId}`);
    });
  };

  return (
    <Section
      heading="Experience"
      subheading="My path as a developer - focused, disciplined, and built on consistent improvement."
    >
      <Divider className="my-20" />

      <div className="space-y-12 sm:space-y-16 md:space-y-20 relative px-4 sm:px-0">
        {experience.map((item, index) => (
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
              {index !== experience.length - 1 && (
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
              id={`experience-${index}`} // Add ID for scrolling
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
                  {item.company}
                </motion.h3>

                {item.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.12 }}
                    viewport={{ once: true }}
                    className="inline-flex"
                  >
                    <span
                      className="
                      text-xs sm:text-sm px-3 py-1 rounded-full
                      bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300
                      border border-blue-200 dark:border-blue-800
                      font-medium
                      shadow-sm
                    "
                    >
                      {item.type}
                    </span>
                  </motion.div>
                )}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.15 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4 group-hover:text-foreground/90 transition"
              >
                {item.role}
              </motion.p>

              {/* View Details Button */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => handleViewAll(`experience-${item.id}`)}
                  className="
                    inline-flex items-center gap-2
                    text-sm font-medium
                    px-4 py-2 rounded-lg
                    bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700
                    dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800
                    text-white
                    transition-all duration-300
                    hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-500/30
                    hover:translate-y-[-1px]
                    active:translate-y-0
                    group/btn
                  "
                >
                  <span>View Details</span>
                  <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
