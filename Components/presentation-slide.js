import { AnimatePresence, motion } from 'framer-motion';
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
    // border: '1px dashed orange',
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
// key={Math.random()}

const dropDownPoints = [
  {
    title: 'Outcome',
    content:
      'Can not be sure if the outcome is what they will like. besides, the judgement is a matter of experties, to some extent.',
    icon: 'project-design',
  },
  {
    title: 'who',
    content: 'finding the right architect is difficult time consuming task.',
    icon: 'architect',
  },
  {
    title: 'why',
    content:
      'they usually dont know the values and services they get, and why they are paying.',
    icon: 'money',
  },
];

let staggerVariant = {
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
let staggerChildVariant = {
  initial: { x: -30 },
  animate: {
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const PresentationSlide = () => {
  return (
    <main style={styles.main}>
      <aside style={styles.context}>
        {[...Array(9 + 1)].map((i, index) => (
          <div
            key={index}
            style={{ ...styles.gridLines.hor, top: index * 50 }}
          ></div>
        ))}
        {[...Array(16 + 1)].map((i, index) => (
          <div
            key={index}
            style={{ ...styles.gridLines.ver, left: index * 50 }}
          ></div>
        ))}
      </aside>

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
      {/* <PresentationElement position={{ x: 500, y: 200 }}>
        <div>sub title</div>
      </PresentationElement> */}
      <PresentationElement
        position={{ x: 40, y: 100 }}
        animation={'fadeIn'}
        // delay={0.5}
      >
        <PresentationPointsDropdown items={dropDownPoints} />
        <motion.div
          key="test"
          variants={staggerVariant}
          initial="initial"
          animate="animate"
          // transition={{
          //   duration: 3,
          //   // when: 'beforeChildren',
          //   staggerChildren: 1.5,
          // }}
        >
          {/* <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div> */}
          {/* <motion.div>1</motion.div>
          <motion.div>2</motion.div>
          <motion.div>3</motion.div>
          <motion.div>4</motion.div> */}
          <motion.div
            variants={staggerChildVariant}
            initial="initial"
            animate="animate"
          >
            1
          </motion.div>
          <motion.div
            variants={staggerChildVariant}
            initial="initial"
            animate="animate"
          >
            2
          </motion.div>
          <motion.div
            variants={staggerChildVariant}
            initial="initial"
            animate="animate"
          >
            3
          </motion.div>
          <motion.div
            variants={staggerChildVariant}
            initial="initial"
            animate="animate"
          >
            4
          </motion.div>
        </motion.div>
      </PresentationElement>
      {/* </AnimatePresence> */}
    </main>
  );
};

export default PresentationSlide;
