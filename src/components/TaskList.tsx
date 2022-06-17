import { useState } from 'react'
import { EmptyList } from './EmptyList'
import { Task } from './Task'
import { TaskInput } from './TaskInput'
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
  const [newTaskTitle, setnewTaskTitle] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setnewTaskTitle(event.target.value)
  }

  const handleCreateNewTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      title: newTaskTitle,
      completed: false
    }
    setTasks([...tasks, newTask])
    setnewTaskTitle('')
  }

  const handleToggleTaskCompletion = (id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
    setTasks(newTasks)
  }

  const completedTasks = tasks.filter((task) => task.completed)

  return (
    <>
      <TaskInput
        value={newTaskTitle}
        onAdd={handleCreateNewTask}
        onChange={handleInputChange}
      />
      <main className={styles.taskListWrapper}>
        <div className={styles.taskList__header}>
          <h5 className={styles.taskCreated}>
            Tarefas Criadas <span>{tasks.length}</span>
          </h5>
          <h5 className={styles.taskDone}>
            Concluídas{' '}
            <span>
              {completedTasks.length} de {tasks.length}
            </span>
          </h5>
        </div>

        {!tasks ? (
          <EmptyList />
        ) : (
          <Task tasks={tasks} onCheck={handleToggleTaskCompletion} />
        )}
      </main>
    </>
  )
}
