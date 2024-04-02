import { useState } from "react"
import style from "./style.module.css"
import { FormInput } from "../../FormInput"
import axiosInstancia from "../../../service/apiAxios"

import { useTaskContext } from "../../context/fetchTasksContext"

interface PropsModalNewTask {
    setIsOpenModal: (any: boolean) => void
}

export const ModalAddTask = ({ setIsOpenModal }: PropsModalNewTask) => {
    const [prioritySelected, setPrioritySelected] = useState<string>("LOW")
    const { updateTasks } = useTaskContext()

    const [values, setValues] = useState({
        description: "",
        dueDate: "",
        priority: "LOW"
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
                required: true
            }
        },
        {
            id: 2,
            label: "Data máxima para finalizar",
            inputAttribute: {
                type: "date",
                required: true,
                name: "dueDate",
                min: minDate
            }
        }
    ]

    const handlePriorityClick = (priorityProps: string) => {
        setPrioritySelected(priorityProps)
        setValues({ ...values, priority: priorityProps })
    }

    const HandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmitTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await axiosInstancia.post("/tasks/", values)

            updateTasks()
            setIsOpenModal(false)
        } catch (error) {
            console.error("Error fetching tasks:", error)
        }
    }

    return (
        <div className={style.modal__newTask}>
            <form
                onSubmit={handleSubmitTask}
                className={style.form__newTask}
            >
                {inputsForm.map((input) => (
                    <FormInput
                        key={input.id}
                        label={input.label}
                        inputAttribute={input.inputAttribute}
                        onChange={HandleInputChange}
                    />
                ))}


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


                <button>Criar Tarefa</button>
            </form>
        </div>
    )
}
