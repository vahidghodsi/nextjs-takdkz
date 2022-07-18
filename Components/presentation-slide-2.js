import { useState } from 'react';
import {
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

  context: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  gridLines: {
    hor: {
      position: 'absolute',
      width: '100%',
      borderBottom: '1px solid lightgrey',
    },
    ver: {
      position: 'absolute',
      height: '100%',
      borderRight: '1px solid lightgrey',
    },
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

const PresentationSlide2 = () => {
  const [step, setstep] = useState(0);
  // const x = useMotionValue(30);
  // const y = useMotionValue(30);
  // const y = useTransform(x, () => step * 2);
  const base = useMotionValue(step);
  const inputs = [1, 2, 3];
  const outputs = [10, 30, 50];
  const y = useTransform(base, inputs, outputs);
  const x = useTransform(y, (val) => 600 - val * 10);
  const height = useMotionValue(10);
  height.set(50 + step * 50);
  // console.log(step);
  const variant = {
    initial: { x: 20, y: 0 },
    animate: { x: 20, y: 20, height: height, transition: { duration: 1 } },
  };

  return (
    <main style={styles.main} onClick={() => setstep(step + 1)}>
      {/* <AnimatePresence> */}
      <PresentationElement
        position={'title'}
        stage={''}
        delay={''}
        animation={'fadeIn'}
      >
        <div>Title</div>
      </PresentationElement>
      <PresentationElement
        position={'test'}
        stage={''}
        delay={''}
        animation={{ animate: { opacity: 0.5 } }}
      >
        <div>test</div>
      </PresentationElement>
      <motion.div style={{ x, y }}>useMotionValue and useTransform</motion.div>
      <motion.div
        // initial={{ x: 0, y: 0, height }}
        // animate={{ x: 20, y: 20, height, transition: { duration: 1 } }}
        variants={variant}
        initial="initial"
        animate="animate"
        style={{ marginLeft: '20px', borderLeft: '1px solid grey', height }}
        // style={{ marginLeft: '20px', borderLeft: '1px solid grey', height }}
      ></motion.div>
      {/* </AnimatePresence> */}
    </main>
  );
};

export default PresentationSlide2;
