let motionVariant = {
  initial: { x: 0, y: 0, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1 },
  exit: { x: 0, y: 0, opacity: 0 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const fadeOut = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  exit: { opacity: 0 },
};

const slideInDown = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { type: 'easeInOut', duration: 1 } },
  exit: { y: 20, opacity: 0 },
};

// =====
export const motionVariants = {
  fadeIn,
  fadeOut,
  slideInDown,
};

// ===== POSITION TEMPLATES ==========
const title = { x: 30, y: 30 };

export const positions = {
  title,
};
