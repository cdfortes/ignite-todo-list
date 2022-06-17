import { Header } from './components/Header'
import './global.css'

import styles from './App.module.css'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'

export function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <TaskInput />
        <TaskList />
      </main>
    </>
  )
}
