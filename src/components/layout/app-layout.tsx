import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import Header from "./header.tsx";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <div className={`bg-purple-blue`}>
        <AnimatePresence mode="wait">
          <Suspense fallback={<div>Loading...</div>}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1"
            >
              <Outlet />
            </motion.div>
          </Suspense>
        </AnimatePresence>
      </div>
    </div>
  );
}
