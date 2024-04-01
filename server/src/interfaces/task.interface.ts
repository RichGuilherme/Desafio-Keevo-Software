
export interface ITask {
    id: number
    description: string
    status: "TODO" | "IN_PROGRESS" | "DONE"
    priority: "LOW" | "MEDIUM" | "HIGH"
    dueDate: string
    createdAt: Date
    updatedAt: Date
}

export interface TaskCreate {
    description: string
    status: "TODO" | "IN_PROGRESS" | "DONE"
    priority: "LOW" | "MEDIUM" | "HIGH"
    dueDate: string
}

export interface TaskFilter { 
   status?: string
   orderBy?: "priorityHigh" | "priorityLow" | "dueDateAsc" | "dueDateDesc"
}

export interface ITaskRepository {
    create(data: TaskCreate): Promise<ITask>
    getAll(): Promise<ITask[]>
    editTask(taskId: string, data: TaskCreate): Promise<ITask>
    deleteTask(taskId: string): Promise<void>
    filterTasks({status, orderBy}: TaskFilter): Promise<ITask[]>
}