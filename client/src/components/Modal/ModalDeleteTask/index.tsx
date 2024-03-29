import style from "./style.module.css"

interface PropsModalDeleteTask {
    setIsOpenModal: (any: boolean) => void
}

export const ModalDeleteTask = ({ setIsOpenModal }: PropsModalDeleteTask) => {

    const handleDeleteTask = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()

        setIsOpenModal(false)
    }

    return (
        <div className={style.deleteTask}>
            <p>Você realmente deseja deletar essa terefa?</p>

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
