import { PlusCircle } from 'phosphor-react'

import styles from './TaskInput.module.css'

interface TaskInputProps {
  onAdd: () => void
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function TaskInput({ onAdd, value, onChange }: TaskInputProps) {
  return (
    <div className={styles.taskInputWrapper}>
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Adicione uma nova tarefa"
        className={styles.taskInput}
        value={value}
        onChange={onChange}
      />
      <button
        type="submit"
        className={styles.taskButton}
        onClick={onAdd}
        disabled={!value}
      >
        Criar <PlusCircle size={24} />
      </button>
    </div>
  )
}
