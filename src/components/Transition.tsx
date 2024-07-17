"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, useLayoutEffect } from "react";

export const LayoutTransition = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const lastPageRef = useRef<HTMLCollection | null>(null);
  const currentPageRef = useRef<HTMLDivElement>(null);
  const exitAnimationDivRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!currentPageRef.current) return;
    if (!lastPageRef.current)
      lastPageRef.current = currentPageRef.current.children;

    exitAnimationDivRef.current?.appendChild(
      lastPageRef.current![0].cloneNode(true)
    );
    lastPageRef.current = currentPageRef.current.children;
  }, [pathname]);

  return (
    <AnimatePresence initial={false}>
      <div className="flex-1 max-w-[650px] min-w-[550px] mx-auto mt-20">
        <motion.div
          key={pathname + "exit-animation"}
          style={{
            position: "absolute",
          }}
          initial={{ y: 0 }}
          animate={{
            y: "-20%",
            opacity: 0,
          }}
          transition={{
            type: "linear",
            duration: 0.2,
          }}
        >
          <div ref={exitAnimationDivRef} />
        </motion.div>

        <motion.div
          key={pathname}
          initial={{ y: "10%" }}
          animate={{ y: 0 }}
          transition={{ type: "linear", duration: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
