export const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const getMotionVariants = <T extends Record<string, unknown>>(variants: {
  initial: T;
  animate: T;
  transition?: Record<string, unknown>;
}) => {
  if (prefersReducedMotion) {
    return {
      initial: {} as T,
      animate: {} as T,
      transition: { duration: 0 },
    };
  }
  return variants;
};
