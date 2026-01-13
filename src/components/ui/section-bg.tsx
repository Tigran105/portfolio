export default function SectionBG() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white
          via-[#f6f8fb]
          to-[#f7f9fc]
          dark:from-[#0d0d0f]
          dark:via-[#0f1013]
          dark:to-[#131418]
        "
      />
    </div>
  );
}
