import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  // ImageIcon
} from "lucide-react";
import Section from "../components/ui/section.tsx";
import Divider from "../components/ui/divider.tsx";

export default function Experience() {
  const experience = [
    {
      title: "Room Planner",
      badge: "Coming Soon",
      type: "Interactive Editor",
      description: (
        <div className={"text-foreground/70 leading-relaxed"}>
          A fully interactive 2D room planner built with React, Fabric.js, and
          Zustand. Supports drag & drop, scaling, rotation, snapping, saving
          layouts, and exporting snapshots.
        </div>
      ),
      tech: ["React", "Fabric.js", "Zustand", "Tailwind", "TypeScript"],
      live: null,
      github: null,
      image: null,
    },
    {
      title: "Lens Visualization Tool",
      type: "Data Visualization / Medical UI",

      description: (
        <div className={"text-foreground/70 leading-relaxed"}>
          A fully interactive 2D room planner built with React, Fabric.js, and
          Zustand. Supports drag & drop, scaling, rotation, snapping, saving
          layouts, and exporting snapshots.
        </div>
      ),
      tech: ["Angular", "D3.js", "TypeScript", "Canvas"],
      live: null,
      github: null,
      image: null,
    },
    {
      title: "Trading Dashboard (DPS)",
      type: "Dashboard System",

      description: (
        <div className={"text-foreground/70 leading-relaxed"}>
          A fully interactive 2D room planner built with React, Fabric.js, and
          Zustand. Supports drag & drop, scaling, rotation, snapping, saving
          layouts, and exporting snapshots.
        </div>
      ),
      tech: ["React", "Zustand", "TypeScript"],
      live: null,
      github: null,
      image: null,
    },
    {
      title: "Leveren — AI CV Builder",
      type: "AI Application",

      description: (
        <div className={"text-foreground/70 leading-relaxed"}>
          A fully interactive 2D room planner built with React, Fabric.js, and
          Zustand. Supports drag & drop, scaling, rotation, snapping, saving
          layouts, and exporting snapshots.
        </div>
      ),
      tech: ["React", "Node.js", "AI Integration", "TypeScript"],
      live: null,
      github: null,
      image: null,
    },
    {
      title: "MSH News — SSR Platform",
      type: "SSR Web App",

      description: (
        <div className={"text-foreground/70 leading-relaxed"}>
          A fully interactive 2D room planner built with React, Fabric.js, and
          Zustand. Supports drag & drop, scaling, rotation, snapping, saving
          layouts, and exporting snapshots.
        </div>
      ),
      tech: ["Next.js", "React", "SSR"],
      live: null,
      github: null,
      image: null,
    },
    {
      title: "Zangi Messenger Desktop",
      type: "Real-Time App",

      description: (
        <div className={"text-foreground/70 leading-relaxed"}>
          A fully interactive 2D room planner built with React, Fabric.js, and
          Zustand. Supports drag & drop, scaling, rotation, snapping, saving
          layouts, and exporting snapshots.
        </div>
      ),
      tech: ["Electron.js", "React", "Node.js", "Stripe"],
      live: null,
      github: null,
      image: null,
    },
  ];

  return (
    <Section
      heading="Experience"
      subheading="A collection of UI systems and applications I’ve built — focused on real interaction, clean architecture, and modern engineering."
      background="section"
    >
      <Divider className="my-16 sm:my-20" />

      {/* grid */}
      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 max-w-4xl mx-auto px-4">
        {experience.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.015 }}
            className="
              group p-6 rounded-2xl border border-border/60 dark:border-white/10
              bg-background/60 dark:bg-[#111]/60 backdrop-blur-sm
              shadow-sm hover:shadow-lg hover:shadow-black/5
              dark:hover:shadow-white/5
            "
          >
            {/* image placeholder */}
            {/*<div*/}
            {/*  className="*/}
            {/*    aspect-video rounded-xl mb-6*/}
            {/*    bg-muted/60 dark:bg-[#1c1c1c]*/}
            {/*    border border-border/60 dark:border-white/10*/}
            {/*    flex items-center justify-center text-foreground/40*/}
            {/*  "*/}
            {/*>*/}
            {/*  <motion.div*/}
            {/*    initial={{ opacity: 0.4 }}*/}
            {/*    animate={{ opacity: [0.4, 0.6, 0.4] }}*/}
            {/*    transition={{ duration: 2, repeat: Infinity }}*/}
            {/*    className="flex items-center gap-3"*/}
            {/*  >*/}
            {/*    <ImageIcon size={28} className="sm:size-8" />*/}
            {/*    <span className="text-base sm:text-lg">*/}
            {/*      Preview Coming Soon*/}
            {/*    </span>*/}
            {/*  </motion.div>*/}
            {/*</div>*/}

            {/* title */}
            <h3 className="text-lg sm:text-xl font-semibold relative inline-block mb-1">
              {project.title}
              <span
                className="
                  absolute left-0 -bottom-1 h-[2px] w-0
                  bg-blue-500/40 rounded-full
                  transition-all duration-300 group-hover:w-full
                "
              />
            </h3>

            {/* badge */}
            {project.badge && (
              <span
                className="
                  inline-block px-2 py-[2px] text-[11px]
                  rounded-md bg-blue-500/20 text-blue-500
                  font-medium mb-3
                "
              >
                {project.badge}
              </span>
            )}

            {/* type */}
            {project.type && (
              <p className="text-sm text-foreground/60 mb-3">{project.type}</p>
            )}

            {/* description */}
            {project.description}

            {/* tags */}
            <div className="flex flex-wrap gap-3 pt-6">
              {project.tech.map((t) => (
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

            {/* buttons */}
            <div className="flex gap-3 pt-6">
              {/* live demo */}
              {project.live ? (
                <a href={project.live} target="_blank">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 border border-border rounded-md text-sm flex items-center"
                  >
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </motion.button>
                </a>
              ) : (
                <button
                  className="px-4 py-2 border border-border/60 rounded-md text-sm opacity-60"
                  disabled
                >
                  Live Demo (Soon)
                </button>
              )}

              {/* github */}
              {project.github ? (
                <a href={project.github} target="_blank">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 border border-border rounded-md text-sm flex items-center"
                  >
                    GitHub <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </a>
              ) : (
                <button
                  className="px-4 py-2 border border-border/60 rounded-md text-sm opacity-60"
                  disabled
                >
                  GitHub (Private)
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
