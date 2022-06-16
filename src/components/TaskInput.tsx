import { PlusCircle } from 'phosphor-react'

import styles from './TaskInput.module.css'

export function TaskInput() {
  return (
    <div className={styles.taskInputWrapper}>
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Adicione uma nova tarefa"
        className={styles.taskInput}
      />
      <button type="button" className={styles.taskButton}>
        Criar <PlusCircle size={24} />
      </button>
    </div>
  )
}
