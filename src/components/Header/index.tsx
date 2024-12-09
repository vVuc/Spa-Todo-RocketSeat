import { PlusCircle } from "@phosphor-icons/react";
import styles from "./index.module.css"
import { ChangeEvent, KeyboardEvent, useState } from "react";
interface props{
    handleCreateTask:(strTask:string)=>void
}
export function Header({handleCreateTask}:props) {
    const [text,setText] = useState('')

    function handleText(event:ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }

    function createTask(strTask:string) {
        handleCreateTask(strTask)
        setText('')
    }

    function enterSubmit(e:KeyboardEvent<HTMLInputElement>) {
        if (e.key == 'Enter') {
            createTask(text)
        }
    }

    return(
        <header>
            <img src="./Logo.svg" alt="Logo" />
            <div className={styles.searchInputs}>
                <input required onKeyDown={enterSubmit} value={text} onChange={handleText} type="text" placeholder="Adicione uma nova tarefa" />
                <button onClick={()=>createTask(text)} type="button">
                    <p>Criar</p>
                    <PlusCircle/>
                </button>
            </div>
        </header>
    )
}