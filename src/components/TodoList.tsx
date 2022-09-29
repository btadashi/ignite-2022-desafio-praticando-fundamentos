import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';

import styles from './TodoList.module.css';

import { Todo, TodoProps } from './Todo';
import { TodoEmpty } from './TodoEmpty';

interface TodoList {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function TodoList() {
  const [todoList, setTodoList] = useState<TodoList[]>([]);
  const [newContent, setNewContent] = useState('');

  const totalTodo = todoList.length;
  const totalTodoCompleted = todoList.filter(todo => todo.isCompleted).length;

  function handleCreateTodo(event: FormEvent) {
    event.preventDefault();

    const newTodo = {
      id: uuidV4(),
      content: newContent,
      isCompleted: false,
    };

    setTodoList([...todoList, newTodo]);

    setNewContent('');
  }

  function handleNewContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewContent(event.target.value);
  }

  function handleNewContentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteTodo(id: string) {
    const todosWithoutDeletedOne = todoList.filter(todo => {
      return todo.id !== id;
    });

    setTodoList(todosWithoutDeletedOne);
  }

  function toggleToCompleted(id: string) {
    const newTodoList = todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });

    setTodoList(newTodoList);
  }

  return (
    <>
      <form onSubmit={handleCreateTodo} className={styles.todoForm}>
        <textarea
          placeholder="Adicione uma nova tarefa"
          value={newContent}
          onChange={handleNewContentChange}
          onInvalid={handleNewContentInvalid}
          required
        />
        <button type="submit">
          Criar
          <PlusCircle size={20} color="var(--gray-100)" />
        </button>
      </form>

      <div className={styles.todoList}>
        <div className={styles.todoInfo}>
          <span>
            Tarefas criadas <span>{todoList.length}</span>
          </span>
          <span>
            Concluídas{' '}
            <span>
              {totalTodoCompleted} de {totalTodo}
            </span>
          </span>
        </div>

        {todoList.length > 0 ? (
          todoList.map(todo => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                content={todo.content}
                isCompleted={todo.isCompleted}
                onDeleteTodo={deleteTodo}
                onToggleToCompleted={toggleToCompleted}
              />
            );
          })
        ) : (
          <TodoEmpty />
        )}
      </div>
    </>
  );
}
