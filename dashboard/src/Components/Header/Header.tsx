import { Typography } from '../Typography/Typography';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Typography tag='h1' variant='title'>
        Hi Arthur, welcome! You have 12 open tasks.
      </Typography>
      <div className={styles.headerRight}>
        <input type='text' placeholder='Search' className={styles.searchInput}></input>
        <div className={styles.profile}>AR</div>
      </div>
    </header>
  );
};
