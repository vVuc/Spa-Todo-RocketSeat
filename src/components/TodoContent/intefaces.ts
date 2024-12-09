export interface task {
    text:string
    key:number
    isComplete:boolean
}

export interface TodoContentInteface {
    tarefasCriadas: task[]
    howManyTasksComplete:number
    handleDeleteTask:(key:number)=>void
    attTask:(key:task)=>void
}