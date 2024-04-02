import { useState } from "react"
import { BinIcon } from "../../../icons/BinIcon"
import { EditIcon } from "../../../icons/EditIcon"
import { Modal } from "../../Modal"

import style from "./style.module.css"

import { ModalDeleteTask } from "../../Modal/ModalDeleteTask"
import { ModalEditTask } from "../../Modal/ModalEditTask"
import { useTaskContext } from "../../context/fetchTasksContext"
import axiosInstancia from "../../../service/apiAxios"


interface Mapping {
    [key: string]: string
}

export const ListCardTask = () => {
    const [openModalAddEditTaks, setIsOpenModal] = useState<boolean>(false)
    const [idTask, setIdTask] = useState<number | null>(null)
    const [indexTask, setIndexTask] = useState<number>(0)
    const [isModal, setIsModal] = useState<string>("")

    const { tasks, updateTasks } = useTaskContext()

    const openModalTask = (modalTask: string, idTask: number, index?: number) => {
        setIsOpenModal(true)

        setIsModal(modalTask)
        setIdTask(idTask)
        setIndexTask(index || 0)
    }

    const handleCheckbox = async (idTask: number, currentStatus: string) => {
        try {
            await axiosInstancia.patch(`/tasks/${idTask}`, {
                status: `${currentStatus === "DONE" ? "TODO" : "DONE"}`
            })

            updateTasks()
        } catch (error) {
            console.error("Error fetching tasks:", error)
        }
    }
    
    const statusMapping = {
        "TODO": "Pendente",
        "IN_PROGRESS": "Em andamento",
        "DONE": "Concluída"
    }

    const priorityMapping = {
        "LOW": "Baixa",
        "MEDIUM": "Média",
        "HIGH": "Alta"
    }

    const translateTaskInfos = (text: string, mapping: Mapping) => {
        if (mapping[text]) {
            return mapping[text].toLowerCase()
        } else {
            return text
        }
    }

    return (
        <>
            <div className={style.c_taskList}>
                {tasks && tasks.map((task, index: number) => (
                    <div
                        key={task.id}
                        className={style.task__card}>

                        <div className={style.task__cardHeader}>
                            <label className={style.containerCheckbox}>
                                <input
                                    checked={task.status === "DONE"}
                                    onChange={() => handleCheckbox(task.id, task.status)}
                                    type="checkbox" />
                                <div className={style.checkmark}></div>
                            </label>

                            <div className={style.task__cardTitle}>
                                <p>Tarefa</p>
                                <p>{task.description}</p>
                            </div>
                        </div>

                        <div className={style.task__cardBody}>
                            <div className={style.task__cardPriority} >
                                <p>Prioridade</p>
                                <p className={`${style[task.priority]}`}>
                                    {translateTaskInfos(task.priority, priorityMapping)}
                                </p>
                            </div>

                            <div className={style.task__cardStatus}>
                                <div className={style.task__btnStatus}>
                                    {translateTaskInfos(task.status, statusMapping)}
                                </div>
                            </div>

                            <div className={style.task__cardDataEnd}>
                                <p>Finalizar até</p>
                                <p>{task.dueDate}</p>
                            </div>

                            <div className={style.task__cardActions}>
                                <div onClick={() => openModalTask("edit", task.id, index)}>
                                    <EditIcon />
                                </div>
                                <div onClick={() => openModalTask("delete", task.id)}>
                                    <BinIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


            </div>

            <Modal
                modalTitle={isModal == "edit" ? "Editar Tarefa" : "Deletar Tarefa"}
                isOpen={openModalAddEditTaks}
                handleClose={() => setIsOpenModal(false)}
                maxWidth={690}
            >
                {isModal == "edit" ?

                    <ModalEditTask
                        idTask={idTask}
                        taskProp={tasks[indexTask]}
                        setIsOpenModal={setIsOpenModal} />
                    :
                    <ModalDeleteTask
                        idTask={idTask}
                        setIsOpenModal={setIsOpenModal}
                    />
                }

            </Modal>
        </>


    )
}
