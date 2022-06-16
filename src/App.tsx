import { Header } from './components/Header'
import './global.css'

import { ClipboardText } from 'phosphor-react'

import styles from './App.module.css'
import { TaskInput } from './components/TaskInput'

export function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <TaskInput />
        <section className={styles.taskListWrapper}>
          <div className={styles.taskList__header}>
            <h5 className={styles.taskCreated}>
              Tarefas Criadas <span>0</span>
            </h5>
            <h5 className={styles.taskDone}>
              Concluídas <span>0</span>
            </h5>
          </div>
          <div className={styles.taskList__body}>
            <div className={styles.taskList__empty}>
              <ClipboardText size={56} />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
