import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import axiosInstancia from "../../service/apiAxios";


type ProviderProps = {
    children: ReactNode
}


interface TaskContextType {
    tasks: Tasks[]
    fetchTasks: () => void
    updateTasks: (orderBy?: string) => void
}

export interface Tasks {
    id: number
    description: string
    priority: string
    status: string
    dueDate: string
    createdAt: Date
    updatedAt: Date
}

const TaskContext = createContext<TaskContextType>({
    tasks: [],
    fetchTasks: () => [],
    updateTasks: () => []
})

// eslint-disable-next-line react-refresh/only-export-components
export const useTaskContext = () => useContext(TaskContext)

const TaskProvider = ({ children }: ProviderProps) => {
    const [tasks, setTasks] = useState<Tasks[]>([])

    useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = async () => {
        try {
            const response = await axiosInstancia.get("/tasks/")
            setTasks(response.data)
        } catch (error) {
            console.error("Error fetching tasks:", error)
        }
    }

    const updateTasks = async (orderBy?: string) => {
        try {
           
            const response = await axiosInstancia.get(`/tasks/?${orderBy}`)
            setTasks(response.data)
        } catch (error) {
            console.error("Error updating tasks:", error)
        }
    }


    return (
        <TaskContext.Provider value={{ tasks, fetchTasks, updateTasks }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider