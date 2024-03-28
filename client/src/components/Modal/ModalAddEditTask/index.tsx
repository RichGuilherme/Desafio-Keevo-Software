import { useState } from "react"
import style from "./style.module.css"
import { FormInput } from "../../FormInput"

interface PropsModalNewTask {
    setIsOpenModal: (any: boolean) => void
    method?: string
    idTask?: string
    buttonText: string
}

export const ModalAddEditTask = ({setIsOpenModal, buttonText}: PropsModalNewTask) => {
    const [prioritySelected, setPrioritySelected] = useState<string>("baixa")
    const [values, setValues] = useState({
        task: "",
        dateEnd: "",
        priority: "baixa"
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

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleSubmitTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(values)
        setIsOpenModal(false)
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
                        onChange={HandleChange}
                    />
                ))}

                <div className={style.priority__form}>
                    <label>Prioridade</label>

                    <div className={style.priority__button}>
                        <div
                            className={`${style.priorityItem} ${style.priorityItem__hard} ${prioritySelected === "alta" ? style.selected__hard : ""}`}
                            onClick={() => handlePriorityClick("alta")}>
                            Alta
                        </div>
                        <div
                            className={`${style.priorityItem} ${style.priorityItem__medium} ${prioritySelected === "media" ? style.selected__medium : ""}`}
                            onClick={() => handlePriorityClick("media")}>
                            Média
                        </div>
                        <div
                            className={`${style.priorityItem} ${style.priorityItem__low} ${prioritySelected === "baixa" ? style.selected__low : ""}`}
                            onClick={() => handlePriorityClick("baixa")}>
                            Baixa
                        </div>
                    </div>
                </div>


                <button>{buttonText}</button>
            </form>
        </div>
    )
}
