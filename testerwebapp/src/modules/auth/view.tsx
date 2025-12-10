import { Typography, Button, Input } from '../../components';
import { PatternFormat } from 'react-number-format';
import styles from './view.module.css';

export const AuthView = () => {
  return (
    <div className={styles.container}>
      <Typography variant='title' tag='h1'>
        LogIn
      </Typography>
      <Typography tag='p' variant='subtitle'>
        enter phone number to enter <br /> the system
      </Typography>
      <Input placeholder='Enter your number"' format='+38 (0##) ### ## ##' component={PatternFormat} />
      <Button variant='contained'>Enter</Button>
      <Typography variant='subtitle' tag='p'>
        <b>
          Dont worry, <br />i am not holding your personal data
        </b>
      </Typography>
    </div>
  );
};
