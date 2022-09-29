import { Trash } from 'phosphor-react';
import { useState } from 'react';

import styles from './Todo.module.css';

export interface TodoProps {
  id: string;
  content: string;
  isCompleted: boolean;
  onDeleteTodo: (id: string) => void;
  onToggleToCompleted: (id: string) => void;
}

export function Todo({
  id,
  content,
  isCompleted,
  onDeleteTodo,
  onToggleToCompleted,
}: TodoProps) {
  function handleDeleteTodo() {
    onDeleteTodo(id);
  }

  function handleChangeToDone() {
    onToggleToCompleted(id);
  }

  return (
    <div className={styles.todo}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" onClick={handleChangeToDone} />
        <span className={styles.checkmark}></span>
      </label>

      <span className={isCompleted ? styles.contentCompleted : styles.content}>
        {content}
      </span>
      <button onClick={handleDeleteTodo} title="Deletar task">
        <Trash size={20} />
      </button>
    </div>
  );
}
