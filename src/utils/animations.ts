// Framer Motion animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.8 },
}

export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: {
    staggerChildren: 0.2,
  },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.5 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
}

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

export const hoverScale = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}

export const hoverGlow = {
  hover: { boxShadow: "0 0 20px rgba(139, 92, 246, 0.8)" },
}

export const pulseGlow = {
  initial: { boxShadow: "0 0 5px rgba(139, 92, 246, 0.5)" },
  animate: { boxShadow: "0 0 20px rgba(139, 92, 246, 0.8)" },
  transition: { repeat: Infinity, duration: 2 },
}

// Typing effect for text
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
}
