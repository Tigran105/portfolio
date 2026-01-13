import { motion } from "framer-motion";
import Section from "../components/ui/section.tsx";
import Divider from "../components/ui/divider.tsx";
import myPhoto from "../assets/myphoto.jpg";

export default function About() {
  const skills = [
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Zustand",
    "Redux",
    "Tailwind",
    "shadcn/ui",
    "Node.js",
    "Electron.js",
    "Fabric.js",
    "D3.js",
    "Canvas APIs",
    "Design Systems",
    "State Architecture",
  ];

  const sections = [
    {
      title: "Who I Am",
      content: (
        <>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
            I’m Tigran — a frontend engineer focused on building clean,
            interactive, and modern interfaces. I care deeply about structure,
            user experience, and practical product value. I love solving complex
            UI problems and creating smooth, meaningful user interactions.
          </p>

          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mt-4">
            I’m a product-oriented engineer who enjoys working on advanced
            interfaces — planners, dashboards, visualization systems, and
            internal tools. I focus on modular architecture, predictable state
            management, and UI that feels intentional and fast.
          </p>
        </>
      ),
    },
    {
      title: "How I Work",
      content: (
        <>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
            I value clarity, direct communication, and calm execution. I believe
            in clean architecture, component-driven development, and writing
            code that is pleasant to maintain.{" "}
            <span className="text-foreground font-medium">
              Quality over hype. Consistency over shortcuts.
            </span>
          </p>

          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mt-4">
            When solving problems, I break them down, understand the core
            requirement, and design a scalable, simple solution.{" "}
            <span className="text-foreground font-medium">
              If something is unclear, I simplify it step by step.
            </span>
          </p>
        </>
      ),
    },
    {
      title: "Skills & Technologies",
      content: (
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                px-3 py-1 rounded-md
                bg-muted/50 dark:bg-[#222]
                border border-border/50 dark:border-white/10
                text-sm transition hover:scale-[1.05]
              "
            >
              {skill}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "What I Value",
      content: (
        <ul className="text-sm sm:text-base list-disc pl-6 space-y-2 text-foreground/80">
          <li>Building scalable, maintainable architecture</li>
          <li>Clean code and meaningful UI</li>
          <li>Consistency over motivation</li>
          <li>Honest communication</li>
          <li>Stable routines and long-term focus</li>
          <li>Discipline and ownership</li>
          <li>Solving problems the right way</li>
        </ul>
      ),
    },
    {
      title: "A Personal Note",
      content: (
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
          I try to build life and software with intention — clarity, good work,
          and real progress. I care about improving every day and creating
          clean, practical solutions that help people.{" "}
          <span className="text-foreground font-medium">
            My goal is to grow consistently and build products that matter.
          </span>
        </p>
      ),
    },
  ];

  return (
    <Section
      heading="About Me"
      subheading="A frontend engineer building meaningful, high-quality interfaces."
      background="blobs-top"
    >
      <Divider className="my-16 sm:my-20" />

      {/* photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center mb-8 sm:mb-12"
      >
        <div
          className="
            relative
            w-40 h-40 sm:w-44 sm:h-44
            rounded-full overflow-hidden
            shadow-[0_4px_24px_rgba(0,0,0,0.08)]
            border border-border/60
           "
        >
          <img
            src={myPhoto}
            alt="Tigran"
            draggable={false}
            className="
              absolute inset-0 w-full h-full
              object-[center_50]
            "
          />
        </div>
      </motion.div>

      <div className="space-y-12 sm:space-y-16 md:space-y-20 max-w-4xl mx-auto px-4 relative">
        {sections.map((block, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.07 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* TITLE WITH ACCENT BAR */}
            <div className="flex items-center gap-4">
              <div className="w-1 h-5 sm:h-6 rounded-full bg-primary/70" />
              <h2 className="text-xl sm:text-2xl font-semibold">
                {block.title}
              </h2>
            </div>

            {block.content}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
