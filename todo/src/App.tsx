import Header from './Components/Header/Header';
import styles from './App.module.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
