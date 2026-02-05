import { Header } from './Components';
import styles from './App.module.css';
import NavMenu from './Components/NavMenu/NavMenu';

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <NavMenu />
      </div>
    </div>
  );
};
