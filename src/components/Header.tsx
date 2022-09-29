import logoImg from '../assets/logo-todo.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logoImg} alt="Logo todo" />
    </div>
  );
}
