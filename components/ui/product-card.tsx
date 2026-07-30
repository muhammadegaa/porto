"use client"

import { motion } from "framer-motion"

export function ProductCard({ index, children }: { index: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group flex flex-col rounded-lg border bg-background p-5 sm:p-6 hover:border-foreground/40 hover:shadow-md transition-[border-color,box-shadow]"
    >
      {children}
    </motion.div>
  )
}
