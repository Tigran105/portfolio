import { motion } from "framer-motion";
import Section from "../components/ui/section.tsx";
import Divider from "../components/ui/divider.tsx";
import { useData } from "../store/data.ts";
import { useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function Experience() {
  const experience = useData((state) => state.experience);
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we have a scrollToId in location state
    if (location.state?.scrollToId) {
      // Wait for DOM to render then scroll
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollToId);
        if (element) {
          const offset = 120; // Adjust for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Optional: Add a visual highlight effect
          element.classList.add("ring-2", "ring-blue-500/30", "rounded-lg");
          setTimeout(() => {
            element.classList.remove(
              "ring-2",
              "ring-blue-500/30",
              "rounded-lg"
            );
          }, 2000);
        }
      }, 300); // Increased delay for page to fully load
    }
  }, [location.state]);

  return (
    <Section
      heading="Experience"
      subheading="A collection of UI systems and applications I've built - focused on real interaction, clean architecture, and modern engineering."
      background="section"
    >
      <Divider className="my-16 sm:my-20" />

      {/* grid */}
      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 max-w-4xl mx-auto px-4">
        {experience.map((item, index) => (
          <motion.div
            key={item.id || index} // Use item.id if available, otherwise index
            id={`experience-${item.id}`} // ADD THIS ID - MUST MATCH THE ONE IN MAIN PAGE
            ref={index === 0 ? scrollRef : undefined} // Optional: attach ref to first item
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.015 }}
            className="
              ml-2 group p-6 rounded-2xl border border-border/60 dark:border-white/10
              bg-background/60 dark:bg-[#111]/60 backdrop-blur-sm
              shadow-sm hover:shadow-lg hover:shadow-black/5
              dark:hover:shadow-white/5
              scroll-mt-24 // Adds space when scrolling to this element
            "
          >
            <div className={"flex items-center mb-1"}>
              {/* title */}
              <h3 className="text-lg sm:text-xl font-semibold relative inline-block mb-1">
                {item.company}
                <span
                  className="
                  absolute left-0 -bottom-1 h-[2px] w-0
                  bg-blue-500/40 rounded-full
                  transition-all duration-300 group-hover:w-full
                "
                />
              </h3>

              {/* role */}
              {item.role && (
                <span
                  className="
                  inline-block px-2 py-[2px] text-[11px]
                  rounded-md bg-blue-500/20 text-blue-500
                  font-medium ml-1
                "
                >
                  {item.role}
                </span>
              )}
            </div>

            {/* type */}
            {item.type && (
              <p className="text-sm text-foreground/60 mb-3">{item.type}</p>
            )}

            {/* time */}
            {item.time && (
              <p className="text-sm text-foreground/50 mb-4">{item.time}</p>
            )}

            {/* description */}
            {item.description &&
              item.description.map((description, idx) => (
                <p key={idx} className="mt-2 text-foreground/80">
                  {description}{" "}
                  {item.id === 4 && (
                    <a href="https://www.mtad.am/" target={"_blank"}>
                      https://www.mtad.am/
                    </a>
                  )}
                </p>
              ))}

            {/* tags */}
            <div className="flex flex-wrap gap-3 pt-6">
              {item.skills &&
                item.skills.map((t) => (
                  <span
                    key={t}
                    className="
                    px-3 py-1 rounded-md text-xs
                    bg-muted/60 dark:bg-[#222]
                    border border-border/60 dark:border-white/10
                    transition hover:scale-[1.05]
                  "
                  >
                    {t}
                  </span>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
