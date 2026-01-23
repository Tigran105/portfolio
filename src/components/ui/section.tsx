// import SectionBG from "./section-bg.tsx";
import { motion } from "framer-motion";
// import BackgroundBlobs from "./background-blobs.tsx";

interface SectionProps {
  children: React.ReactNode;
  heading?: string;
  subheading?: string;
  animate?: boolean;
  background?: "section" | "blobs" | "blobs-top" | "blobs-bottom";
  padding?: "sm" | "md" | "lg";
  align?: "center" | "left";
  className?: string;
}

export default function Section({
  children,
  heading,
  subheading,
  animate = true,
  // background = "section",
  padding = "md",
  align = "center",
  className = "",
}: SectionProps) {
  const paddingClasses =
    padding === "sm"
      ? "pt-12 pb-16 md:pt-16 md:pb-20"
      : padding === "lg"
      ? "pt-28 pb-32 md:pt-32 md:pb-36"
      : "pt-20 pb-24 md:pt-24 md:pb-28";

  const alignClasses = align === "left" ? "text-left" : "text-center";

  return (
    <section className={`relative px-4 ${paddingClasses} ${className}`}>
      {/* Background variants */}
      {/*{background === "section" && <SectionBG />}*/}
      {/*{background === "blobs" && <BackgroundBlobs />}*/}
      {/*{background === "blobs-top" && (*/}
      {/*  <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden pointer-events-none">*/}
      {/*    <BackgroundBlobs />*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{background === "blobs-bottom" && (*/}
      {/*  <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden pointer-events-none">*/}
      {/*    <BackgroundBlobs />*/}
      {/*  </div>*/}
      {/*)}*/}

      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        {heading && (
          <motion.div
            initial={animate ? { opacity: 0, y: 30 } : {}}
            whileInView={animate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className={`${alignClasses} space-y-3 mb-14 md:mb-20 mt-10`}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className={'text-gradient'}>{heading}</span>
            </h2>

            {subheading && (
              <p className="text-foreground/70 max-w-2xl mx-auto text-base md:text-lg">
                {subheading}
              </p>
            )}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}
