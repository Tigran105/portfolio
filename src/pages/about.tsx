import { motion } from "framer-motion";
import Section from "../components/ui/section.tsx";
import Divider from "../components/ui/divider.tsx";
import myPhoto from "../assets/myPhoto2.jpg";
// import { useData } from "../store/data.ts";

export default function About() {
  // const skills = useData((state) => state.skills);
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "UI Engineering & Design Systems",
    "Canvas",
    "Three.js",
    "Interactive Graphics",
    "API",
    "Auth & Payments Integration",
    "Clean Code",
    "Performance",
    "Refactoring",
  ];

  const sections = [
    {
      title: "Who I Am",
      content: (
        <>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
            I’m Tigran - Front-End Developer with 5+ years of experience in
            React and React Native, building web and mobile applications.
            Skilled in interactive UIs, including 3D experiences with Three.js,
            and integrating analytics and payment solutions like Stripe.
            Passionate about delivering user-focused solutions that drive
            business value.
          </p>

          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mt-4">
            Building fast, intentional interfaces with a focus on modularity and
            performance. I enjoy solving complex UI challenges in planners and
            internal tools, leveraging structured state management to create
            seamless user experiences.
          </p>
        </>
      ),
    },
    {
      title: "How I Work",
      content: (
        <>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
            I approach problems with a product mindset - first understanding the
            user and the goal, then designing a clear and maintainable solution.
          </p>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mt-4">
            I value clean architecture, reusable components, and thoughtful
            interactions. I iterate quickly, test assumptions early, and pay
            attention to performance, edge cases, and visual details.
          </p>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mt-4">
            I work comfortably both independently and in collaboration with
            designers and product teams, translating ideas into polished,
            production-ready interfaces.
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
          <li>Clarity and usability in every interface</li>
          <li>Clean, maintainable, scalable code</li>
          <li>Collaboration and teamwork</li>
          <li>Continuous learning and growth</li>
          <li>Performance and smooth interactions</li>
          <li>Discipline and ownership</li>
          <li>Solving problems the right way</li>
        </ul>
      ),
    },
    {
      title: "A Personal Note",
      content: (
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
          I focus on building meaningful, intuitive, and high-quality
          interfaces. I enjoy learning new technologies, exploring visual
          systems, and turning complex ideas into simple, enjoyable experiences
          for users.
        </p>
      ),
    },
  ];

  return (
    <Section
      heading="About Me"
      subheading="Frontend engineer creating interactive, scalable interfaces where design and engineering meet."
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
                <span className={"text-gradient"}>{block.title}</span>
              </h2>
            </div>

            {block.content}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
