import PresentationSlide2 from '../Components/presentation-slide-2';
import PresentationSlide from './presentation-slide';

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
    padding: '5rem 0',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const PresentationContent = ({ children }) => {
  return (
    <main style={styles.main}>
      {/* <PresentationSlide /> */}
      <PresentationSlide2 />
    </main>
  );
};

export default PresentationContent;
