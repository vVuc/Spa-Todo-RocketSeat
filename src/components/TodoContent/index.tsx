import styles from "./index.module.css"
import { TodoCards } from "../TodoCard"
import { WarningTodo } from "../AvisoTarefas"
import { TodoContentInteface } from "./intefaces"


export function TodoContent({tarefasCriadas,howManyTasksComplete,handleDeleteTask,attTask}:TodoContentInteface) {
        return(
                <div className={styles.todoContent}>
                    <div className={styles.headerTodo}>
                        <div className={styles.tarefasCriadas}>
                            <p>Tarefas criadas</p>
                            <span>{tarefasCriadas.length}</span>
                        </div>
                        <div className={styles.tarefasConcluidas}>
                            <p>Concluídas</p>
                            <span>{howManyTasksComplete} de {tarefasCriadas.length}</span>
                        </div>
                    </div>
                    {tarefasCriadas.length>0?tarefasCriadas.map((card)=><TodoCards key={card.key} configCard={card} deleteCard={handleDeleteTask} attTask={attTask}/>):<WarningTodo/>}
                </div>
    )
}