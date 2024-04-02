import { useState } from "react"
import style from "./style.module.css"
import { FormInput } from "../../FormInput"
import { Tasks, useTaskContext } from "../../context/fetchTasksContext"
import axiosInstancia from "../../../service/apiAxios"

interface PropsModalEditTask {
    setIsOpenModal: (any: boolean) => void
    taskProp: Tasks
    idTask: number | null
}

export const ModalEditTask = ({ setIsOpenModal, idTask, taskProp }: PropsModalEditTask) => {
    const [prioritySelected, setPrioritySelected] = useState<string>(`${taskProp.priority}`)
    const { updateTasks } = useTaskContext()

    const [values, setValues] = useState<{
        [key: string]: string
    }>({
        description: `${taskProp.description}`,
        dueDate: `${taskProp.dueDate}`,
        status: `${taskProp.status}`,
        priority: `${taskProp.priority}`
    })

    const today = new Date()
    const minDate = today.toISOString().split("T")[0]

    const inputsForm = [
        {
            id: 1,
            label: "Tarefa",
            inputAttribute: {
                type: "text",
                placeholder: "Digite a tarefa",
                name: "description",
            }
        },
        {
            id: 2,
            label: "Data máxima para finalizar",
            inputAttribute: {
                type: "date",
                name: "dueDate",
                min: minDate
            }
        }
    ]

    const handlePriorityClick = (priorityProps: string) => {
        setPrioritySelected(priorityProps)
        setValues({ ...values, priority: priorityProps })
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmitTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await axiosInstancia.patch(`/tasks/${idTask}`, values)

            updateTasks()
            setIsOpenModal(false)
        } catch (error) {
            console.error("Error fetching tasks:", error)
        }
        setIsOpenModal(false)
    }

    return (
        <div className={style.modal__editTask}>
            <form
                onSubmit={handleSubmitTask}
                className={style.form__editTask}
            >
                {inputsForm.map((input) => (
                    <FormInput
                        key={input.id}
                        label={input.label}
                        value={values[input.inputAttribute.name]}
                        inputAttribute={input.inputAttribute}
                        onChange={handleInputChange}
                    />
                ))}

                <div className={style.status__form}>
                    <label>Status da tarefa</label>

                    <select name="status" onChange={handleSelectChange} value={values.status}>
                        <option value="TODO">Pendente</option>
                        <option value="IN_PROGRESS">Em desenvolvimento</option>
                        <option value="DONE">Concluída</option>
                    </select>
                </div>

                <div className={style.priority__form}>
                    <label>Prioridade</label>

                    <div className={style.priority__button}>
                        <div
                            className={`${style.priorityItem} ${style.priorityItem__hard} ${prioritySelected === "HIGH" ? style.selected__hard : ""}`}
                            onClick={() => handlePriorityClick("HIGH")}>
                            Alta
                        </div>
                        <div
                            className={`${style.priorityItem} ${style.priorityItem__medium} ${prioritySelected === "MEDIUM" ? style.selected__medium : ""}`}
                            onClick={() => handlePriorityClick("MEDIUM")}>
                            Média
                        </div>
                        <div
                            className={`${style.priorityItem} ${style.priorityItem__low} ${prioritySelected === "LOW" ? style.selected__low : ""}`}
                            onClick={() => handlePriorityClick("LOW")}>
                            Baixa
                        </div>
                    </div>
                </div>


                <button>Editar Tarefa</button>
            </form>
        </div>
    )
}
