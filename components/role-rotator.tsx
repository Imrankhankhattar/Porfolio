"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function RoleRotator({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((prev) => (prev + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="relative inline-block h-[1.2em] min-w-[14ch] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-0 text-emerald-500 dark:text-emerald-400"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
