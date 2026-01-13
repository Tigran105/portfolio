import {Outlet, NavLink, useLocation} from "react-router-dom";
import {Button} from "../ui/button.tsx";
import {Moon, Sun, Menu, X} from "lucide-react";
import {useThemeStore} from "../../store/theme-store.ts";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";

export default function AppLayout() {
  const {theme, toggleTheme} = useThemeStore();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    {to: "/", label: "Home"},
    {to: "/about", label: "About"},
    {to: "/projects", label: "Projects"},
    {to: "/contact", label: "Contact"},
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div
          className="flex items-center gap-8 px-6 h-14 rounded-full bg-background/70 backdrop-blur-xl shadow-lg border border-border">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-sm font-semibold tracking-wide text-foreground hover:opacity-80 transition"
          >
            Tigran
            <span className="text-violet-500">.dev</span>
          </NavLink>

          {/* Vertical divider */}
          <div className="hidden md:block h-6 w-px bg-border"/>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-5 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({isActive}) =>
                  isActive
                    ? "text-violet-500 font-medium"
                    : "text-foreground/60 hover:text-violet-400 transition"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Vertical divider */}
          <div className="hidden md:block h-6 w-px bg-border ml-2"/>

          {/* Actions */}
          <div className="flex items-center gap-2 ">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? (
                <Moon className="h-4 w-4"/>
              ) : (
                <Sun className="h-4 w-4"/>
              )}
            </Button>

            <button
              className="md:hidden p-1 hover:opacity-70 transition"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5"/>
            </button>
          </div>

        </div>
      </header>


      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background blur overlay */}
            <motion.div
              className="
                fixed inset-0
                bg-black/20 dark:bg-black/30
                backdrop-blur-md
                z-40
              "
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={() => setOpen(false)}
            />

            {/* Slide-in menu panel */}
            <motion.div
              className="
                fixed top-0 right-0 h-full w-60
                bg-white/95 backdrop-blur-xl
                dark:bg-[#111]/90
                backdrop-blur-xl
                border-l border-border/60 dark:border-white/10
                shadow-xl
                z-50 flex flex-col p-6 gap-6
              "
              initial={{x: 300, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              exit={{x: 300}}
              transition={{type: "spring", stiffness: 230, damping: 28}}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Menu</h3>
                <button onClick={() => setOpen(false)}>
                  <X className="h-6 w-6"/>
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({isActive}) =>
                      isActive
                        ? "text-primary font-medium"
                        : "text-foreground/80 hover:text-primary transition"
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* PAGE TRANSITION */}
      <div className={`${theme === "light" ? "bg-white" : "bg-purple-blue"}`}>

        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            transition={{duration: 0.3}}
            className="flex-1"
          >
            <Outlet/>
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}
