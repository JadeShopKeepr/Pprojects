import { useRef } from 'react';
import { Typography } from '..';
import styles from './NavMenu.module.css';

const NavMenu = () => {
  const listRef = useRef<HTMLUListElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!listRef.current) return;

    const scrollAmount = 220;

    listRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        <ul ref={listRef} className={styles.navList}>
          {[
            'Dashboard',
            'Accounts',
            'Brokers',
            'Submissions',
            'Organisations',
            'Goals & Rules',
            'Admin',
            'Admin',
            'Admin',
            'Admin',
            'Admin',
            'Admin',
            'Admin',
            'Admin',
          ].map((item, i) => (
            <li key={i} className={styles.navItem}>
              <Typography tag='h3' variant='subtitle'>
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      </div>

      <button className={`${styles.sliderButton} ${styles.left}`} onClick={() => scroll('left')} aria-label='Scroll left'>
        ◀
      </button>
      <button className={`${styles.sliderButton} ${styles.right}`} onClick={() => scroll('right')} aria-label='Scroll right'>
        ▶
      </button>
    </nav>
  );
};

export default NavMenu;
