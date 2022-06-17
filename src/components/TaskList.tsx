import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { EmptyList } from './EmptyList'
import styles from './TaskList.module.css'

interface Task {
  id: number
  title: string
  completed: boolean
}

const myTasks: Array<Task> = [
  {
    id: 1,
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
  },
  {
    id: 2,
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
  },
  {
    id: 3,
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
  },
  {
    id: 4,
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: true
  },
  {
    id: 5,
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: true
  }
]

export function TaskList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tasks, setTasks] = useState<Array<Task>>(myTasks)
  return (
    <section className={styles.taskListWrapper}>
      <div className={styles.taskList__header}>
        <h5 className={styles.taskCreated}>
          Tarefas Criadas <span>{tasks.length}</span>
        </h5>
        <h5 className={styles.taskDone}>
          Concluídas <span>0</span>
        </h5>
      </div>

      {!tasks ? (
        <EmptyList />
      ) : (
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li key={task.id} className={styles.task}>
              <div className={styles.taskInfo}>
                <input
                  type="checkbox"
                  name="task"
                  id="task"
                  checked={task.completed}
                />
                <label htmlFor="">{task.title}</label>
              </div>
              <button title="Deletar tarefa">
                <Trash size={24} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
