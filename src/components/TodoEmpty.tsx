import clipboardImg from '../assets/clipboard.svg';

import styles from './TodoEmpty.module.css';

export function TodoEmpty() {
  return (
    <div className={styles.todoEmpty}>
      <img src={clipboardImg} alt="Prancheta de papel" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
