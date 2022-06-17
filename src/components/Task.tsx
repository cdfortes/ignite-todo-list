import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface Task {
  id: number
  title: string
  completed: boolean
}

interface TaskListProps {
  tasks: Array<Task>
  onCheck: (id: number) => void
  onDelete: (id: number) => void
}

export function Task({ tasks, onCheck, onDelete }: TaskListProps) {
  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <li key={task.id} className={styles.task}>
          <div className={styles.taskInfo}>
            <input
              type="checkbox"
              name="task"
              id="task"
              defaultChecked={task.completed}
              onClick={() => onCheck(task.id)}
            />
            <label htmlFor="task">{task.title}</label>
          </div>
          <button title="Deletar tarefa" onClick={() => onDelete(task.id)}>
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  )
}
