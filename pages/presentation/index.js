import Head from 'next/head';
import PresentationContent from '../../Components/presentation-content';
// import styles from '.../styles/Home.module.css';

const styles = {
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <PresentationContent />
    </div>
  );
}
