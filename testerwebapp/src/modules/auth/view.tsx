import { Typography, Button } from '../../components';

import styles from './view.module.css';

export const AuthView = () => {
  return (
    <div className={styles.container}>
      <Typography variant='title' tag='h1'>
        LogIn
      </Typography>
      <Typography tag='p' variant='subtitle'>
        enter login to enter <br /> the system
      </Typography>

      <Button variant='contained'>Enter</Button>
    </div>
  );
};
