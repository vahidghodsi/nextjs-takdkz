import { AnimatePresence, motion } from 'framer-motion';
import { motionVariants, positions } from './presentation-element-lib';

const cloneObject = (value) => {
  if (typeof value === 'object') {
    let clonnedObj = {};
    let keys = Object.keys(value);
    Object.values(value).forEach((item, index) => {
      clonnedObj[keys[index]] =
        typeof item === 'object' ? cloneObject(item) : item;
    });
    return clonnedObj;
  }
  return value;
};

const PresentationElement = (props) => {
  const position = props.position || { x: 0, y: 0 };
  const stage = props.stage || 0;
  const delay = props.delay;
  const animation = props.animation;

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
    motionVariant = { ...motionVariant, ...cloneObject(elAnimation) };
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

  const infoMotionVariant = {
    initial: { x: motionVariant.initial.x, y: motionVariant.initial.y },
    animate: {
      x: motionVariant.animate.x,
      y: motionVariant.animate.y,
      transition: {},
    },
    exit: {},
  };

  // console.log(motionVariant);

  return (
    <AnimatePresence>
      <motion.div
        className={'_presentation-element'}
        variants={motionVariant}
        initial={props.initial || 'initial'}
        animate={props.animate || 'animate'}
        exit={props.exit || 'exit'}
        custom={props.custom}
        style={{
          position: 'absolute',
          border: props.devMode ? '1px dashed orange' : 'none',
        }}
      >
        {props.children}
        {props.devMode && (
          <motion.div
            className={'_presentation-element'}
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '10px',
                border: '1px solid rgba(200,200,200, .5)',
                borderRadius: '10px',
                fontSize: '10px',
                padding: '6px 12px',
                whiteSpace: 'nowrap',
              }}
            >
              <div>
                x : {motionVariant.initial.x} / y : {motionVariant.initial.y}
              </div>
              <div>preset: </div>
              <div></div>
              <div></div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default PresentationElement;
