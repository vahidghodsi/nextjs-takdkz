import { motion } from 'framer-motion';
import { motionVariants } from './presentation-element-lib';

const styles = {
  dropdown_point: {
    margin: '20px',
    border: '1px dashed orange',

    title: {
      fontWeight: 'bold',
      fontSize: '20px',
    },
    content: {
      // fontWeight : "bold",
      fontSize: '16px',
    },
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
    line: {
      position: 'absolute',
      borderLeft: '1px solid grey',
    },
  },
};

const PresentationPointsDropdown = ({ items = [] }) => {
  // console.log(items);

  const dropdownVariant = JSON.parse(
    JSON.stringify(motionVariants.slideInDown)
  );

  dropdownVariant.animate.transition = {
    ...dropdownVariant.animate.transition,
    when: 'beforeChildren',
    staggerChildren: 0.5,
  };
  console.log(dropdownVariant);

  // ** we need to deep clone the object, so that modifications are not passed to the reference
  const contentMotionVariant = JSON.parse(
    JSON.stringify(motionVariants.slideInDown)
  );
  contentMotionVariant.animate.transition = {
    ...contentMotionVariant.animate.transition,
    delay: 1.5,
  };
  // console.log(contentMotionVariant);
  // console.log(motionVariants.slideInDown);

  const itemEls = items.map((item, index) => (
    <div key={index} className="dropdown_point" style={styles.dropdown_point}>
      <motion.div
        style={styles.dropdown_point.title}
        {...motionVariants.slideInDown}
      >
        {item.title}
      </motion.div>
      <motion.div
        style={styles.dropdown_point.content}
        {...contentMotionVariant}
      >
        {item.content}
      </motion.div>
    </div>
  ));

  return (
    <div className="preseentation-dropdown">
      <div className="context">
        <motion.div
          className="line"
          style={styles.context.line}
          initial={{ height: '0px' }}
          animate={{ height: '60px' }}
        ></motion.div>
      </div>
      <motion.div {...dropdownVariant}>{itemEls}</motion.div>
    </div>
  );
};

export default PresentationPointsDropdown;
