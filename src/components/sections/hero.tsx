import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-10 md:pt-0 pb-10 md:pb-20  text-foreground">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Hey, I'm{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-400 text-transparent bg-clip-text">
            Tigran
          </span>
          .
        </h1>

        <p className="text-2xl md:text-3xl font-semibold mt-4">
          I craft{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-400 text-transparent bg-clip-text">
            engaging, modern web experiences
          </span>{" "}
          for users everywhere.
        </p>

        <p className="text-foreground/70 mt-6 leading-relaxed md:max-w-2xl mx-auto text-lg md:text-xl">
          From interactive dashboards and planners to visualization tools and
          sleek web apps, I build **React + TypeScript applications** with
          clean architecture, scalable UI, and smooth performance.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex justify-center gap-4"
        >
          <button
            onClick={() => navigate("/projects")}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-400 text-white rounded-full font-medium hover:scale-105 transition-transform"
          >
            View My Work
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 border border-foreground rounded-full font-medium hover:bg-foreground/10 transition"
          >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
