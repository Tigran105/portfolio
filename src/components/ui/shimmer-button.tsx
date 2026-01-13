import type { ReactNode, ButtonHTMLAttributes } from "react";
import { Button } from "./button.tsx";

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ShimmerButton({
  children,
  className = "",
  ...props
}: ShimmerButtonProps) {
  return (
    <Button
      {...props}
      className="
        group relative overflow-hidden
        border border-border/60 dark:border-white/10
        transition-colors
      "
    >
      <span
        className="
          absolute inset-0 z-0
          bg-gradient-to-r
          from-transparent via-black/5 dark:via-white/10 to-transparent
          opacity-0 group-hover:opacity-20
          transition-opacity duration-300
        "
      />
      <span className="relative z-10 flex items-center">{children}</span>
    </Button>
  );
}
