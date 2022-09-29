import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TodoList />
      </div>
    </div>
  );
}
