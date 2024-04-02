import style from "./style.module.css"
import axiosInstancia from "../../../service/apiAxios"

import { useTaskContext } from "../../context/fetchTasksContext"

interface PropsModalDeleteTask {
    setIsOpenModal: (any: boolean) => void
    idTask: number | null
}

export const ModalDeleteTask = ({ setIsOpenModal, idTask }: PropsModalDeleteTask) => {
    const { updateTasks } = useTaskContext()

    const handleDeleteTask = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()

        try {
            await axiosInstancia.delete(`/tasks/${idTask}`)
            updateTasks()
            setIsOpenModal(false)
        } catch (error) {
            console.error("Error fetching tasks:", error)
        }
    }


    return (
        <div className={style.deleteTask}>
            <p>Você realmente deseja deletar essa tarefa?</p>

            <div>
                <button
                    onClick={handleDeleteTask}
                    className={`${style.deleteTask__btn} ${style.btn__delete}`}>
                    Deletar
                </button>
                <button
                    onClick={() => setIsOpenModal(false)}
                    className={`${style.deleteTask__btn} ${style.btn__cancel}`}>
                    Cancelar
                </button>
            </div>
        </div>
    )
}
