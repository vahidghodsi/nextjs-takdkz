import { useEffect, useState } from 'react';
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import PresentationPointsDropdown from '../Components/presentation-points-dropdown';
import PresentationElement from './presentation-element';

const styles = {
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  main: {
    position: 'relative',
    width: '800px',
    height: '450px',
    border: '1px dashed orange',
  },
};

let motionVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
      // when: 'beforeChildren',
      staggerChildren: 1.5,
      delayChildren: 0.3,
    },
  },
};

const PresentationSlide2 = ({ devMode }) => {
  const [step, setStep] = useState(0);

  // const y = useTransform(x, () => step * 2);
  const base = useMotionValue(0);
  const inputs = [1, 2, 3];
  const outputs = [1, 4, 8];
  // const y = useTransform(base, inputs, outputs, { clamp: false });
  // console.log(step);

  const updateStep = (stepVal) => {
    if (stepVal < 4) {
      setStep(stepVal + 1);
    } else {
      setstep(0);
    }
  };

  const x = useMotionValue(100);
  const y = useMotionValue(40);
  const height = useMotionValue(10);

  animate(height, 10 + step * 80);
  useEffect(() => {}, []);

  const variant = {
    id: '_id',
    title: 'motion variant object',
    initial: {
      x: 0,
      y: 30,
      opacity: 0,
      height: 0,
      borderLeft: '2px solid grey',
    },
    animate: (step) => ({
      x: 40,
      y: 40,
      opacity: 1,
      height: 10 + step * 80,
      transition: { duration: 0.5, type: 'easeInOut' },
    }),
    exit: {
      y: 0,
      opacity: 0,
      height: 10,
      transition: {
        duration: 0.4,
        type: 'easeInOut',
      },
    },
  };

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

  // ** clone object funstion test
  let clonnedObject = cloneObject(variant);
  console.log('=====');
  console.log(variant);
  console.log(clonnedObject);
  console.log(cloneObject(['value 1', 'value 2', { title: 'value object 1' }]));
  console.log('>>>>>');
  clonnedObject.initial.x = 12563;
  clonnedObject.exit.height = 12;
  clonnedObject.exit.transition.duration = 135;
  console.log(variant);
  console.log(clonnedObject);

  return (
    <main style={styles.main} onClick={() => updateStep(step)}>
      {/* <AnimatePresence> */}
      {/* */}

      <PresentationElement
        position={{ x: 100, y: 50 }}
        devMode={devMode}
        animation={variant}
        // initial="initial"
        // animate="animate"
      >
        title
      </PresentationElement>
      {/* <PresentationElement
        devMode={devMode}
        variants={variant}
        animation={variant}
        // initial="initial"
        // animate="animate"
        custom={step}
      />
      <motion.div
        style={{ x, y, height, borderLeft: '2px solid grey' }}
      ></motion.div> */}
      {/* </AnimatePresence> */}
    </main>
  );
};

export default PresentationSlide2;
