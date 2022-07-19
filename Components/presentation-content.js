import { useState } from 'react';
import PresentationSlide2 from '../Components/presentation-slide-2';
import PresentationSlide from './presentation-slide';

const styles = {
  main: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  container: {
    padding: '0 0.5rem',
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    padding: '20px',
    width: '100%',
  },
  btn: {
    padding: '12px',
    color: 'white',
    background: 'lightgrey',
  },
};

const PresentationContent = ({ children }) => {
  const [devMode, setDevMode] = useState(false);
  console.log(devMode);

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <div style={styles.btn} onClick={() => setDevMode(!devMode)}>
          DEV MODE
        </div>
      </header>
      <div style={styles.container}>
        {/* <PresentationSlide /> */}
        <PresentationSlide2 devMode={devMode} />
      </div>
    </main>
  );
};

export default PresentationContent;
