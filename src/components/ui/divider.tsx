export default function Divider({ className = "" }) {
  return (
    <div
      className={`
        h-px w-full my-16
        bg-gradient-to-r 
        from-transparent 
        via-neutral-300 
        to-transparent 
        dark:via-neutral-700
        ${className}
      `}
    />
  );
}
