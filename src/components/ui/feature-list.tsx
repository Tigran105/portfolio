import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface FeatureListProps {
  items: string[];
}

export function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="space-y-3 text-foreground/80">
      {items.map((text, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * i }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center gap-2 cursor-default"
            whileHover={{ x: 4, scale: 1.02 }}
            transition={{ duration: 0.15 }}
          >
            <CheckCircle2 className="text-blue-500 h-5 w-5" />
            <span className="text-foreground/80">{text}</span>
          </motion.div>
        </motion.li>
      ))}
    </ul>
  );
}
