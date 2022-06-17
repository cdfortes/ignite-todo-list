import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { mirageServer } from '../services/server'
import { EmptyList } from './EmptyList'
import { Task } from './Task'
import { TaskInput } from './TaskInput'
import styles from './TaskList.module.css'

interface Task {
  id: number
  title: string
  completed: boolean
}

if (process.env.NODE_ENV === 'development') {
  mirageServer()
}

export function TaskList() {
  const [tasks, setTasks] = useState<Array<Task>>([])
  const [newTaskTitle, setnewTaskTitle] = useState<string>('')

  useEffect(() => {
    api.get('todos').then((response) => setTasks(response.data.todos))
  }, [])

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

  const handleRemoveTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  const completedTasks = tasks.filter((task) => task.completed).length

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
              {completedTasks ? `${completedTasks} de ${tasks.length}` : 0}
            </span>
          </h5>
        </div>

        {!tasks.length ? (
          <EmptyList />
        ) : (
          <Task
            tasks={tasks}
            onCheck={handleToggleTaskCompletion}
            onDelete={handleRemoveTask}
          />
        )}
      </main>
    </>
  )
}
