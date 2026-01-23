import { motion } from "framer-motion";
import { ArrowRight, ImageIcon, PlayCircle } from "lucide-react";
import { Button } from "../ui/button.tsx";
import { Link } from "react-router-dom";
import Divider from "../ui/divider.tsx";
import ShimmerButton from "../ui/shimmer-button.tsx";
import { FeatureList } from "../ui/feature-list.tsx";
import Section from "../ui/section.tsx";
import ProjectCard from "../ui/project-card.tsx";

export default function SignatureProject() {
  return (
    <Section
      heading="Signature Project"
      subheading="A fast, canvas-based room planner with drag-and-drop, transformations, snapping, and smart layout persistence — built with React, Fabric.js, and modern UI architecture."
    >
      <div className="max-w-6xl mx-auto px-2">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left – Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              relative self-start rounded-xl overflow-hidden border border-border/80
              bg-background/80 dark:bg-[#111]/70 shadow-sm
              hover:shadow-md dark:hover:shadow-lg
              aspect-video flex flex-col items-center justify-center
              text-foreground/50 transition px-4 py-6 sm:px-8
              before:absolute before:inset-0 before:bg-gradient-to-br
              before:from-[#1476ff]/10 before:to-[#4facfe]/5 before:opacity-60
            "
          >
            <ImageIcon className="mb-2" size={48} />
            <span className="text-lg sm:text-xl text-center">
              Planner Preview (Coming Soon)
            </span>
          </motion.div>

          {/* Right – Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold">Room Planner MVP</h3>

            {/* Short Description */}
            <p className="text-foreground/70 leading-relaxed">
              The Room Planner MVP is an interactive editor where users arrange
              furniture on a canvas, adjust object properties, and save layouts.
              The system is built for clarity, performance, and future expansion
              toward 3D rendering.
            </p>

            {/* Feature List */}
            <FeatureList
              items={[
                "Drag-and-drop furniture system",
                "Move, rotate, and scale objects with precision",
                "Canvas rendering using Fabric.js",
                "Zustand architecture with undo/redo support",
                "Export layouts using a structured JSON schema",
                "Save & restore editing sessions",
              ]}
            />

            {/* Technical Highlights */}
            <div className="pt-2">
              <h4 className="text-lg font-semibold mb-2">
                Technical Highlights
              </h4>
              <ul className="list-disc ml-5 space-y-1 text-foreground/70">
                <li>Canvas rendering pipeline with Fabric.js</li>
                <li>Modular Zustand state slices</li>
                <li>Snap-to-grid & object normalization logic</li>
                <li>Exportable JSON schema for 2D → 3D compatibility</li>
                <li>Optimized rendering for smooth interactions</li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-1 sm:pt-2">
              <Button
                variant="outline"
                disabled
                className="text-sm sm:text-base"
              >
                <PlayCircle className="mr-2 h-4 w-4" />
                Live Demo — Coming Soon
              </Button>

              <Link to="/experience">
                <ShimmerButton>
                  More Experience
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </ShimmerButton>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Preview Screens */}
        <div className="mt-16 sm:mt-24">
          <Divider />

          <h4 className="text-lg sm:text-xl font-semibold mb-4">
            Preview Screens
          </h4>

          <p className="text-foreground/70 mb-6">
            Early UI preview screens from the planner. Full interactive demo
            will be added soon.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((index) => (
              <ProjectCard key={index} delay={index * 0.1}>
                <ImageIcon size={48} />
                <span className="ml-3 text-lg sm:text-xl">
                  Planner Preview (Coming Soon)
                </span>
              </ProjectCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
