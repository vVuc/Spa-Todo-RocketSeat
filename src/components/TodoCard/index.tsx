import { Trash } from "@phosphor-icons/react"
import styles from "./index.module.css"
import { useEffect, useState } from "react"
import { task } from "../TodoContent/intefaces"
interface props{
  configCard: task
  deleteCard: (key:number)=>void
  attTask: (key:task)=>void
}

export function TodoCards({attTask,configCard,deleteCard}:props) {
  const [newConfigCard,setNewConfigCard] = useState(configCard)
  const {isComplete,key,text} = newConfigCard

  useEffect(()=>{
    attTask(newConfigCard)
  },[newConfigCard])

  function markCompleteTask() {
    setNewConfigCard(previewValue => {
      return {...previewValue,
        isComplete:!previewValue.isComplete
      }
    })
  }


  return(
  <div className={styles.card}>
        <a onClick={markCompleteTask}><img src={isComplete?"./checkConfirm.svg":"check.svg"}/></a>
        <p>{text}</p>
        <Trash size={24} onClick={()=>deleteCard(key)} className={styles.trashss} color="#808080"/>
  </div>
    )
}