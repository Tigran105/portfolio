import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button.tsx";
import { Moon, Sun, Menu } from "lucide-react";
import { useThemeStore } from "../../store/theme-store.ts";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
// import Logo from "@/components/layout/logo.tsx";
import whiteLogo from "../../assets/whiteLogo.svg";
import purpleLogo from "../../assets/purpleLogo.svg";
import MobileNav from "../../components/ui/mobileNavbar.tsx";

export default function AppLayout() {
  const { theme, toggleTheme } = useThemeStore();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/experience", label: "Experience" },
    { to: "/contact", label: "Contact" },
  ];
  //todo chatgpt: seo optimization for shared links (meta tags) for each page in react router dom v6
  //   OG INPORMATION
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* NAVBAR */}
      <MobileNav navItems={navItems} open={open} setOpen={setOpen} />

      {/* MOBILE MENU OVERLAY */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[89vw] md:w-auto">
        <div
          className="flex items-center gap-8 px-6 h-14 rounded-full bg-background/70 backdrop-blur-md
                      shadow-lg border border-border w-full justify-between"
        >
          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm font-semibold tracking-wide text-foreground hover:opacity-80 transition"
          >
            {/*Tigran Portfolio Logo*/}
            <img
              src={theme === "light" ? purpleLogo : whiteLogo}
              alt="logo"
              className={"w-[40px]"}
            />
          </NavLink>

          {/* Vertical divider */}
          <div className="hidden md:block h-6 w-px bg-border" />

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-5 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-gradient font-bold"
                    : "text-foreground/60 hover:text-violet-400 transition font-medium"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          {/*Page name for Mobile*/}
          <div className="md:hidden flex-1 text-center text-sm text-gradient font-bold ml-2">
            {navItems.find((item) => item.to === location.pathname)?.label ||
              ""}
          </div>
          {/* Vertical divider */}
          <div className="hidden md:block h-6 w-px bg-border ml-2" />

          {/* Actions */}
          <div className="flex items-center gap-2 ">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>

            <button
              className="md:hidden p-1 hover:opacity-70 transition"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* PAGE TRANSITION */}
      <div className={`bg-purple-blue`}>
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}
