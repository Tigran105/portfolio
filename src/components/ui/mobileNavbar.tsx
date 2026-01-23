import {NavLink} from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";
import {X} from "lucide-react";

interface MobileNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  navItems: Array<{ to: string; label: string }>;
}

export default function MobileNav({open, setOpen, navItems}: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={() => setOpen(false)}
          />

          <motion.div
            className="
              fixed top-24 right-4
              w-72 max-h-[calc(100vh-7rem)]
              bg-background/95 backdrop-blur-2xl
              border border-border/40
              rounded-3xl
              shadow-2xl
              z-50 flex flex-col
              overflow-hidden
            "
            initial={{scale: 0.9, opacity: 0, y: -20}}
            animate={{scale: 1, opacity: 1, y: 0}}
            exit={{scale: 0.9, opacity: 0, y: -20}}
            transition={{type: "spring", stiffness: 260, damping: 25}}
          >
            <div className="flex justify-between items-center p-6 border-b border-border/30">
              <div>
                <h3 className="text-xl font-bold text-gradient">Navigation</h3>
                <p className="text-xs text-foreground/50 mt-0.5">Explore my work</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-foreground/5 rounded-full transition"
              >
                <X className="h-5 w-5"/>
              </button>
            </div>

            <nav className="flex flex-col p-6 gap-2 overflow-y-auto">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => {
                    setOpen(false);
                    window.scrollTo({top: 0, behavior: 'smooth'});
                  }}
                  className={({isActive}) =>
                    `group relative px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3
                    ${isActive
                      ? "bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-violet-500/20"
                      : "hover:bg-foreground/5"
                    }`
                  }
                >
                  {({isActive}) => (
                    <>
                      <span
                        className={`font-medium ${isActive ? "text-gradient" : "text-foreground/70 group-hover:text-foreground"}`}>
                        {item.label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute right-3 w-1.5 h-1.5 bg-violet-400 rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="p-4 border-t border-border/30">
              <p className="text-xs text-foreground/40 text-center">
                © 2026 Portfolio
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}