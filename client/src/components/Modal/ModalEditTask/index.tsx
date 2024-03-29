import { useState } from "react"
import style from "./style.module.css"
import { FormInput } from "../../FormInput"

interface PropsModalNewTask {
    setIsOpenModal: (any: boolean) => void
    idTask: string
}

export const ModalEditTask = ({ setIsOpenModal }: PropsModalNewTask) => {
    const [prioritySelected, setPrioritySelected] = useState<string>("low")
    const [values, setValues] = useState({
        task: "",
        dateEnd: "",
        status: "pending",
        priority: "low"
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
                name: "task",
                required: true
            }
        },
        {
            id: 2,
            label: "Data máxima para finalizar",
            inputAttribute: {
                type: "date",
                required: true,
                name: "dateEnd",
                min: minDate
            }
        }
    ];

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

    const handleSubmitTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(values)
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
                        inputAttribute={input.inputAttribute}
                        onChange={handleInputChange}
                    />
                ))}

                <div className={style.status__form}>
                    <label>Status da tarefa</label>

                    <select name="status" onChange={handleSelectChange}>
                        <option value="pending">Pendente</option>
                        <option value="inProgress">Em desenvolvimento</option>
                        <option value="completed">Concluída</option>
                    </select>
                </div>

                <div className={style.priority__form}>
                    <label>Prioridade</label>

                    <div className={style.priority__button}>
                        <div
                            className={`${style.priorityItem} ${style.priorityItem__hard} ${prioritySelected === "hard" ? style.selected__hard : ""}`}
                            onClick={() => handlePriorityClick("hard")}>
                            Alta
                        </div>
                        <div
                            className={`${style.priorityItem} ${style.priorityItem__medium} ${prioritySelected === "medium" ? style.selected__medium : ""}`}
                            onClick={() => handlePriorityClick("medium")}>
                            Média
                        </div>
                        <div
                            className={`${style.priorityItem} ${style.priorityItem__low} ${prioritySelected === "low" ? style.selected__low : ""}`}
                            onClick={() => handlePriorityClick("low")}>
                            Baixa
                        </div>
                    </div>
                </div>


                <button>Editar Tarefa</button>
            </form>
        </div>
    )
}
