import { ClipboardText } from "@phosphor-icons/react"
import styles from "./index.module.css"
export function WarningTodo() {
    return(
        <div className={styles.WarningTodo}>
           <ClipboardText size={56}/>
           <p><strong>Você ainda não tem tarefas cadastradas</strong> <br/>
            Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}