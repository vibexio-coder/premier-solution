/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";


export default function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ filter: "blur(1px)" }}
      animate={{ filter: "blur(0px)" }}
      exit={{ filter: "blur(1px)" }}
      transition={{ duration: 0.2, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}