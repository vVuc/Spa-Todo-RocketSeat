import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { TodoContent } from '../../components/TodoContent'
import './index.css'
import { task } from '../../components/TodoContent/intefaces'

export function App() {
  const [tarefasCriadas,setTarefasCriadas] = useState<task[]>([])
  const [tasksCompleted,setTasksCompleted] = useState(0)
  
  function howManyTasksComplete() {
      return tarefasCriadas.length>0?tarefasCriadas.filter(card=>card.isComplete===true).length:0
  }
  
  function attTask(newValueOfTask:task) {  
      setTarefasCriadas(previewValue=> previewValue.map(card=> {
        const test =card.key == newValueOfTask.key? newValueOfTask:card
        return test
      }))
  
  }
useEffect(()=>{
  setTasksCompleted(howManyTasksComplete())  
  // console.log("tarefasCriadas: ",tarefasCriadas);
  // console.log("tasksCompleted: ",tasksCompleted);
},[tarefasCriadas])


function handleCreateTask(strTask:string) {
  console.log(strTask.trim());
  console.log(strTask.trim().length);
  
  if(strTask.trim().length==0){
    return
  }
  const newkey = tarefasCriadas.length>0?tarefasCriadas.reduce((accumulator, currentValue) => currentValue.key>accumulator.key?currentValue:accumulator).key:0
  const newTask = {text:strTask,isComplete:false, key:newkey+1}
    setTarefasCriadas(previwValue=> [...previwValue,newTask])
}
function handleDeleteTask(key:number) {
    setTarefasCriadas(previwValue=> previwValue.filter(i=>i.key!==key))
}

  return (
    <>
      <Header handleCreateTask={handleCreateTask}/>
        <main>
          <TodoContent tarefasCriadas={tarefasCriadas} howManyTasksComplete={tasksCompleted} handleDeleteTask={handleDeleteTask} attTask={attTask} />
        </main>
    </>
  )
}
