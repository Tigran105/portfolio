import { useThemeStore } from "../../store/theme-store.ts";
import { useState } from "react";
import video from "../../assets/heroBackground.mp4";

export default function Hero() {
  const { theme } = useThemeStore();
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/*VERSION 1*/}
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: videoLoaded ? 1 : 0 }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div
        className={`absolute inset-0 ${
          theme === "dark" ? "bg-black/50" : "bg-white/50"
        }`}
      />
      {/*------*/}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 animate-fade-in">
          Hi, I’m{" "}
          <span
            className={`text-gradient ${theme === "dark" ? "" : "text-bold"}`}
          >
            Tigran
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl">
          Front-End Developer crafting immersive web experiences
        </p>
        <div className={"mb-6 text-foreground space-y-2 max-w-[500px]"}>
          I specialize in building scalable applications with React, TypeScript,
          and modern UI libraries. Focused on clean code, smooth performance,
          and pixel-perfect implementation.
        </div>
        <p></p>
        {/*<div className="flex gap-4">*/}
        {/*  <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition">*/}
        {/*    View Experience*/}
        {/*  </button>*/}
        {/*  <button*/}
        {/*    className="px-8 py-3 border-2 border-white text-foreground font-semibold rounded-lg hover:bg-white/10 transition">*/}
        {/*    Contact Me*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}
