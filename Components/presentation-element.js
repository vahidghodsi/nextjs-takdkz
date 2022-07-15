import { AnimatePresence, motion } from 'framer-motion';
import { motionVariants, positions } from './presentation-element-lib';

const PresentationElement = ({
  children,
  position,
  stage = 0,
  delay,
  animation,
}) => {
  let motionVariant = {
    initial: { x: 0, y: 0 },
    animate: { transition: {} },
    exit: {},
  };

  // ===== ANIMATION ==========
  let elAnimation = motionVariant;
  if (typeof animation === 'string') {
    elAnimation = motionVariants[animation];
  } else if (typeof animation === 'object') {
    elAnimation = animation;
  }

  // console.log(elAnimation);
  if (elAnimation) {
    motionVariant = { ...motionVariant, ...elAnimation };
  }
  console.log(motionVariant);

  // ===== POSITION ==========
  let elPosition = motionVariant.initial;
  if (typeof position === 'string') {
    elPosition = positions[position];
  } else if (typeof position === 'object') {
    elPosition = position;
  }

  if (elPosition) {
    motionVariant.initial.x = elPosition.x;
    motionVariant.initial.y = elPosition.y;
  }

  // ===== DELAY ==========

  if (delay) {
    motionVariant.animate.transition = {
      ...motionVariant.animate.transition,
      delay,
    };
  }

  // console.log(motionVariant);

  return (
    <AnimatePresence>
      <motion.div
        className={'_presentation-element'}
        variants={motionVariant}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
        style={{ position: 'absolute' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PresentationElement;
