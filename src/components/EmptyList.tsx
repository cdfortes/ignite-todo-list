import { ClipboardText } from 'phosphor-react'

import styles from './EmptyList.module.css'

export function EmptyList() {
  return (
    <div className={styles.taskList__body}>
      <div className={styles.taskList__empty}>
        <ClipboardText size={56} />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
